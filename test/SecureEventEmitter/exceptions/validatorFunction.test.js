const {SecureEventEmitter} = require('../../../.packed')

test('SecureEventEmitter - exceptions - [validatorFunction]', () => {
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