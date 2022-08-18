const {
    isSymbol,
    isArray,
    isUndefined,
    isFunction,
    isString,
} = require('./utils');

const error_if_invalid_emitterKey = (emitterKey) => {
    if (!isSymbol(emitterKey) && !isString(emitterKey)) {
        throw new TypeError('SecureEventEmitter emitterKey must be a Symbol or String type');
    }
};

const error_if_unlock_failed = (unknownEmitterKey, rightEmitterKey) => {
    if (unknownEmitterKey !== rightEmitterKey) {
        throw new TypeError(`Unlock Failed - use the ${String(rightEmitterKey)} emitterKey to unlock emitter, if dont have access the ${String(rightEmitterKey)} emitterKey, which means that event emitting from there is not allowed`);
    }
};

const error_if_invalid_eventTypes = (eventTypes) => {
    if (!isArray(eventTypes)) {
        throw new TypeError('SecureEventEmitter eventTypes must be an array');
    }
    if (!eventTypes.length) {
        throw new TypeError('SecureEventEmitter eventTypes must be a not empty array');
    }
    for (let i = 0; i < eventTypes.length; ++i) {
        error_if_invalid_eventType(eventTypes[i]);
    }
};

const error_if_invalid_eventType = (eventType) => {
    if (!isString(eventType)) {
        throw new TypeError(`eventType must be a string. \n\n Invalid eventType:\n ${eventType}\n\n`);
    }
};

const error_if_eventType_not_exist = (eventType, eventTypes) => {
    if (!eventTypes.includes(eventType)) {
        throw new TypeError(`eventType: ${eventType} not exist - ${eventTypes}`);
    }
};

const error_if_invalid_validate = (validatorFunction) => {
    if (!isUndefined(validatorFunction) && !isFunction(validatorFunction)) {
        throw new TypeError('SecureEventEmitter validatorFunction must be a function');
    }
};

const error_if_validation_failed = (validatorFunction, args) => {
    if (validatorFunction) {
        const errorMessage = validatorFunction(...args);
        if (errorMessage && isString(errorMessage)) {
            throw new TypeError(errorMessage);
        }
    }
};

const error_if_invalid_listener = (listener) => {
    if (!isFunction(listener)) {
        throw new TypeError(`listener must be a function: \n${listener}\n`);
    }
};



module.exports = {
    error_if_invalid_emitterKey,
    error_if_unlock_failed,
    error_if_invalid_eventType,
    error_if_invalid_eventTypes,
    error_if_eventType_not_exist,
    error_if_invalid_validate,
    error_if_validation_failed,
    error_if_invalid_listener,
};