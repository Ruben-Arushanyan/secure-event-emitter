const {
    error_if_invalid_emitterKey,
    error_if_unlock_failed,
    error_if_invalid_eventType,
    error_if_invalid_eventTypes,
    error_if_eventType_not_exist,
    error_if_invalid_validate,
    error_if_validation_failed,
    error_if_invalid_listener,
} = require('./errors');

class SecureEventEmitter {
    #listenersMap = {}
    #emitterKey
    #eventTypes = []
    #validatorFunction

    constructor(eventTypes, emitterKey, validatorFunction) {
        error_if_invalid_eventTypes(eventTypes);
        error_if_invalid_emitterKey(emitterKey);
        error_if_invalid_validate(validatorFunction);

        this.#eventTypes = eventTypes;
        this.#emitterKey = emitterKey;
        this.#validatorFunction = validatorFunction;

        for (let i = 0; i < eventTypes.length; ++i) {
            this.#listenersMap[eventTypes[i]] = [];
        }
    }

    /////// PUBLIC METHODS ////////
    on = (eventType, listener) => {
        error_if_invalid_eventType(eventType);
        error_if_eventType_not_exist(eventType, this.#eventTypes);
        error_if_invalid_listener(listener);

        if (!this.#listenersMap[eventType].includes(listener)) {
            this.#listenersMap[eventType].push(listener);
        }
    }

    off = (eventType, listener) => {
        error_if_invalid_eventType(eventType);
        error_if_eventType_not_exist(eventType, this.#eventTypes);
        error_if_invalid_listener(listener);
        this.#listenersMap[eventType] = this.#listenersMap[eventType].filter(l => l !== listener);
    }

    unlock = (emitterKey) => {
        error_if_unlock_failed(emitterKey, this.#emitterKey);
        return { emit: this.#emit };
    }


    /////// PRIVATE METHODS ////////
    #emit = (eventType, ...args) => {
        error_if_invalid_eventType(eventType);
        error_if_eventType_not_exist(eventType, this.#eventTypes);
        error_if_validation_failed(this.#validatorFunction, args);

        const listeners = this.#listenersMap[eventType];
        for (let i = 0; i < listeners.length; ++i) {
            listeners[i](...args);
        }
    }
}

module.exports = {
    SecureEventEmitter,
}