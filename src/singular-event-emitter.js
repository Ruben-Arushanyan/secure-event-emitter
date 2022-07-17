const {SecureEventEmitter} = require('./secure-event-emitter');

const EVENT_TYPE = 'singular-event';

class SingularEventEmitter {
    #secureEventEmitter
    constructor(...args) {
        this.#secureEventEmitter = new SecureEventEmitter([EVENT_TYPE], ...args);
    }
    on = (...args) => this.#secureEventEmitter.on(EVENT_TYPE, ...args);
    off = (...args) => this.#secureEventEmitter.off(EVENT_TYPE, ...args);
    unlock = (...args) => {
        const { emit } = this.#secureEventEmitter.unlock(...args);
        return { emit: (...args) => emit(EVENT_TYPE, ...args) };
    }
}

module.exports = {
    SingularEventEmitter,
}