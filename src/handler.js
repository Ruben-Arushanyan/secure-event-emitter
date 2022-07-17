const {Payload} = require('./payload')
const {isFunction} = require('./utils')

function Handler(cb) {
    if (!isFunction(cb)) {
        throw new TypeError('[[Handler]] first argument must be a Function. [Handler(cb)]');
    }
    return (payload) => {
        if (!(Payload.isPayload(payload))) {
            throw new TypeError('handler argument type must be a [[Payload]] class objects');
        }
        cb(payload);
    };
}

module.exports = {
    Handler,
}