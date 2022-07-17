import {
    useEffect,
} from 'react';
import {
    isObservable,
} from '../utils';

const useListener = (observable, ...args) => {
    if (!isObservable(observable)) {
        throw new TypeError('[[useListener]] first argument type must be a observable object');
    }

    useEffect(() => {
        observable.on(...args);
        return () => {
            observable.off(...args);
        };
    }, [observable, ...args]);
};

export {useListener};