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
} = require('../.packed')


test('Exceptions for constructor', () => {
    expect(() => new SecureEventEmitter()).toThrow(/SecureEventEmitter eventTypes must be an array/)
    expect(() => new SecureEventEmitter([])).toThrow(/SecureEventEmitter eventTypes must be a not empty array/)

    expect(() => new SecureEventEmitter([4])).toThrow(/eventType must be a string/)
    expect(() => new SecureEventEmitter([true])).toThrow(/eventType must be a string/)
    expect(() => new SecureEventEmitter([{a: "hello"}])).toThrow(/eventType must be a string/)

    expect(() => new SecureEventEmitter([""])).toThrow(/eventType must be a valid formated string/)
    expect(() => new SecureEventEmitter(["aA"])).toThrow(/eventType must be a valid formated string/)
    expect(() => new SecureEventEmitter(["ab-"])).toThrow(/eventType must be a valid formated string/)
    expect(() => new SecureEventEmitter(["ab/a"])).toThrow(/eventType must be a valid formated string/)
    expect(() => new SecureEventEmitter(["ab-ab", "ab--ab"])).toThrow(/eventType must be a valid formated string/)

    expect(() => new SecureEventEmitter(
        ["ab-ab", "ab"],
        {},
    )).toThrow(/SecureEventEmitter emitterKey must be a Symbol or String type/)
    expect(() => new SecureEventEmitter(
        ["ab-ab", "ab"],
        45
    )).toThrow(/SecureEventEmitter emitterKey must be a Symbol or String type/)

    expect(() => new SecureEventEmitter(
        ["ab-ab", "ab"],
        Symbol("fdfd fdfd fdf"),
        45
    )).toThrow(/SecureEventEmitter validatorFunction must be a function/)

    expect(new SecureEventEmitter(
        ["ab-ab", "ab"],
        Symbol("fdfd fdfd fdf"),
    ))

    expect(() => new SecureEventEmitter(
        ["ab-ab", "ab"],
        Symbol("fdfd fdfd fdf"),
        {}
    )).toThrow(/SecureEventEmitter validatorFunction must be a function/)

    expect(new SecureEventEmitter(
        ["ab-ab", "ab"],
        Symbol("fdfd fdfd fdf"),
        () => {}
    ))
})


test('Exceptions for [on] method', () => {
    const emitter = new SecureEventEmitter(
        [
            'xxx',
            'yyy',
            'zzz'
        ],
        Symbol('my emitter key')
    )


    expect(() => emitter.on()).toThrow(/eventType must be a string/)
    expect(() => emitter.on(45)).toThrow(/eventType must be a string/)
    expect(() => emitter.on({})).toThrow(/eventType must be a string/)

    expect(() => emitter.on("")).toThrow(/eventType must be a valid formated string/)
    expect(() => emitter.on("Aa")).toThrow(/eventType must be a valid formated string/)

    expect(() => emitter.on("aa")).toThrow(/not exist/)

    expect(() => emitter.on("zzz")).toThrow(/listener must be a function/)
    expect(() => emitter.on("zzz", {})).toThrow(/listener must be a function/)
    expect(() => emitter.on("zzz", true)).toThrow(/listener must be a function/)
    expect(emitter.on("zzz", () => {}))
})

test('Exceptions for [off] method', () => {
    const emitter = new SecureEventEmitter(
        [
            'xxx',
            'yyy',
            'zzz'
        ],
        Symbol('my emitter key')
    )


    expect(() => emitter.off()).toThrow(/eventType must be a string/)
    expect(() => emitter.off(45)).toThrow(/eventType must be a string/)
    expect(() => emitter.off({})).toThrow(/eventType must be a string/)

    expect(() => emitter.off("")).toThrow(/eventType must be a valid formated string/)
    expect(() => emitter.off("Aa")).toThrow(/eventType must be a valid formated string/)

    expect(() => emitter.off("aa")).toThrow(/not exist/)

    expect(() => emitter.off("zzz")).toThrow(/listener must be a function/)
    expect(() => emitter.off("zzz", {})).toThrow(/listener must be a function/)
    expect(() => emitter.off("zzz", true)).toThrow(/listener must be a function/)
    expect(emitter.off("zzz", () => {}))
})

test('Exceptions for [unlock] method', () => {
    const emitterKey = Symbol('my emitter key')
    const emitter = new SecureEventEmitter(
        [
            'xxx',
            'yyy',
            'zzz'
        ],
        emitterKey
    )


    expect(() => emitter.unlock()).toThrow(/Unlock Failed/)
    expect(() => emitter.unlock(Symbol())).toThrow(/Unlock Failed/)
    expect(() => emitter.unlock(Symbol('my emitter key'))).toThrow(/Unlock Failed/)
    expect(() => emitter.unlock(44)).toThrow(/Unlock Failed/)

    expect(emitter.unlock(emitterKey))
})

test('Exceptions for [emit] method', () => {
    const emitterKey = Symbol('my emitter key')
    const emitter = new SecureEventEmitter(
        [
            'xxx',
            'yyy',
            'zzz'
        ],
        emitterKey
    )

    const x = emitter.unlock(emitterKey)

    expect(() => x.emit()).toThrow(/eventType must be a string/)
    expect(() => x.emit(45)).toThrow(/eventType must be a string/)
    expect(() => x.emit({})).toThrow(/eventType must be a string/)

    expect(() => x.emit("aA")).toThrow(/eventType must be a valid formated string/)

    expect(() => x.emit('yy')).toThrow(/not exist/)
    expect(x.emit('yyy'))
    expect(x.emit('yyy', 45))
    expect(x.emit('yyy', {}, {}))
})

test('Exceptions for [validatorFunction] method', () => {
    const emitterKey = Symbol('my emitter key')
    let emitter = new SecureEventEmitter(
        [
            'xxx',
            'yyy',
            'zzz'
        ],
        emitterKey,
        (a, b) => {
            expect(a).toBe(11)
            expect(b).toBe(111)
        }
    )
    let x = emitter.unlock(emitterKey)
    expect(x.emit('xxx', 11, 111))


    emitter = new SecureEventEmitter(
        [
            'xxx',
            'yyy',
            'zzz'
        ],
        emitterKey,
        () => {
            return 45
        }
    )
    x = emitter.unlock(emitterKey)
    expect(x.emit('xxx'))

    emitter = new SecureEventEmitter(
        [
            'xxx',
            'yyy',
            'zzz'
        ],
        emitterKey,
        () => {
            return {}
        }
    )
    x = emitter.unlock(emitterKey)
    expect(x.emit('xxx'))

    emitter = new SecureEventEmitter(
        [
            'xxx',
            'yyy',
            'zzz'
        ],
        emitterKey,
        () => {
            return ""
        }
    )
    x = emitter.unlock(emitterKey)
    expect(x.emit('xxx'))


    emitter = new SecureEventEmitter(
        [
            'xxx',
            'yyy',
            'zzz'
        ],
        emitterKey,
        () => {
            return "my error"
        }
    )
    x = emitter.unlock(emitterKey)
    expect(() => x.emit('xxx')).toThrow(/my error/)
})