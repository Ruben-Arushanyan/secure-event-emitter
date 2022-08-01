const {SecureEventEmitter} = require('../../../.packed')

test('SecureEventEmitter - exceptions - [off]', () => {
    const emitter = new SecureEventEmitter(
        [
            'xxx',
            'yyy',
            'zzz'
        ],
        'my emitter key'
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