const {SecureEventEmitter} = require('../../../.packed')

test('SecureEventEmitter - exceptions - [emit]', () => {
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


    expect(() => x.emit('yy')).toThrow(/not exist/)
    expect(x.emit('yyy'))
    expect(x.emit('yyy', 45))
    expect(x.emit('yyy', {}, {}))
})