/**
* Copyright (c) 2021-present Ruben Arushanyan (https://github.com/ruben-arushanyan)
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
* 
*/



////////////////////////// TEST ////////////////////////////
const {
    SecureEventEmitter,
} = require('../src')



test('Exceptions for [on] method', () => {
    const emitterKey = Symbol('my emitter key')
    let emitter = new SecureEventEmitter(
        [
            'xxx',
            'yyy',
            'zzz'
        ],
        emitterKey
    )
    let x = emitter.unlock(emitterKey)
    const arr = []

    emitter.on('xxx', (a, b) => {
        arr.push(a)
        arr.push(b)
    })
    x.emit('yyy', 1, 2)
    expect(arr).toEqual([])
    x.emit('xxx', 1, 2)
    expect(arr).toEqual([1, 2])

    const f1 = (a) => {
        arr.push(a)
    }
    emitter.on('xxx', f1)
    x.emit('xxx', 3, 4)
    expect(arr).toEqual([1, 2, 3, 4, 3])

    emitter.on('xxx', f1)
    x.emit('xxx', 5, 6)
    expect(arr).toEqual([1, 2, 3, 4, 3, 5, 6, 5])

    emitter.on('yyy', (a) => {
        arr.push(a)
    })
    x.emit('xxx', 7, 8)
    expect(arr).toEqual([1, 2, 3, 4, 3, 5, 6, 5, 7, 8, 7])

    x.emit('yyy', 9)
    expect(arr).toEqual([1, 2, 3, 4, 3, 5, 6, 5, 7, 8, 7, 9])

    emitter.off('xxx', f1)
    x.emit('xxx', 10, 11)
    expect(arr).toEqual([1, 2, 3, 4, 3, 5, 6, 5, 7, 8, 7, 9, 10, 11])

    x.emit('yyy', 12)
    expect(arr).toEqual([1, 2, 3, 4, 3, 5, 6, 5, 7, 8, 7, 9, 10, 11, 12])
})
