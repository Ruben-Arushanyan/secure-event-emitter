const {SecureEventEmitter} = require('../../../.packed')

test('SecureEventEmitter - exceptions [constructor]', () => {
    expect(() => new SecureEventEmitter()).toThrow(/SecureEventEmitter eventTypes must be an array/)
    expect(() => new SecureEventEmitter([])).toThrow(/SecureEventEmitter eventTypes must be a not empty array/)

    expect(() => new SecureEventEmitter([4])).toThrow(/eventType must be a string/)
    expect(() => new SecureEventEmitter([true])).toThrow(/eventType must be a string/)
    expect(() => new SecureEventEmitter([{a: "hello"}])).toThrow(/eventType must be a string/)


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