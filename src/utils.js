/**
* Copyright (c) 2021-present Ruben Arushanyan (https://github.com/ruben-arushanyan)
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
* 
*/

const identity = (x) => x
const isFunction = (x) => typeof x === 'function'
const isUndefined = (x) => typeof x === 'undefined'
const isString = (x) => typeof x === 'string'
const isArray = (x) => Array.isArray(x)
const isSymbol = (x) => typeof x === 'symbol'
const isDescribedSymbol = (x) => (isSymbol(x) && x.description)
const isObject = (x) => (typeof x === 'object') && (x !== null)
const isSubset = (setArr, subsetArr) => subsetArr.every(val => setArr.includes(val))
const isValidEventType = (x) => isString(x) && /^[a-z]+(-[a-z]+)*$/.test(x)

module.exports = {
    identity,
    isFunction,
    isUndefined,
    isString,
    isArray,
    isSymbol,
    isObject,
    isSubset,
    isDescribedSymbol,
    isValidEventType,
}