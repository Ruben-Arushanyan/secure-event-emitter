const {
    isSymbol,
    isDescribedSymbol,
} = require('./utils');

class Payload {
    constructor(origin, ...args) {
        if (!isSymbol(origin)) {
            throw new TypeError('Payload origin must be a Symbol type');
        }
        if (!isDescribedSymbol(origin)) {
            throw new TypeError('origin symbol description is required. Try Symbol(description)');
        }

        this.origin = origin;
        this.args = args;
        this.#setMeta();
        if (new.target === Payload) {
            Object.freeze(this);
        }
    }

    #setMeta = () => {
        const meta = {};
        meta.date = Date.now();
        meta._index = getIndex();
        // ...
        // ...
        this.meta = meta;
    }
}

Payload.isPayload = (object) => object instanceof Payload;
Payload.validator = (payload) => {
    if (!Payload.isPayload(payload)) {
        return 'Emitter payload can be an only Payload type';
    }
};

const getIndex = (() => {
    let current = 0;
    return () => ++current;
})();

module.exports = {
    Payload,
};