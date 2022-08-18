const {SecureEventEmitter} = require('../../../.packed')

test('SecureEventEmitter - exceptions - [on]', () => {
    const emitter = new SecureEventEmitter(
        [
            'xxx',
            'yyy',
            'zzz'
        ],
        'my emitter key'
    )

    expect(() => emitter.on()).toThrow(/eventType must be a string/)
    expect(() => emitter.on(45)).toThrow(/eventType must be a string/)
    expect(() => emitter.on({})).toThrow(/eventType must be a string/)

    expect(() => emitter.on("aa")).toThrow(/not exist/)

    expect(() => emitter.on("zzz")).toThrow(/listener must be a function/)
    expect(() => emitter.on("zzz", {})).toThrow(/listener must be a function/)
    expect(() => emitter.on("zzz", true)).toThrow(/listener must be a function/)
    expect(emitter.on("zzz", () => {}))
})