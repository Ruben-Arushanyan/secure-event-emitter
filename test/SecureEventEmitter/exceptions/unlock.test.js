const {SecureEventEmitter} = require('../../../.packed')

test('SecureEventEmitter - exceptions - [unlock]', () => {
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