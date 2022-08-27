# [Secure Event Emitter](https://secure-event-emitter.js.org)

> You can find the full documentation on the [website](https://secure-event-emitter.js.org)

**secure-event-emitter** is a tiny javascript package that uses restrict rules and mechanisms to build safer and protected event-driven architecture. It's similar to nodejs [EventEmitter](https://nodejs.org/api/events.html), but dictates stricter rules to prevent misuse.

## The Main Features

- All event types that the emitter can use must be defined․
- We can not emit events anywhere without emitterKey․
- We can define a strict payload structure and emitter can only work with that structured data

## Installation

```bash
npm install secure-event-emitter
```

## Usage

### Class:  `SecureEventEmitter`

> ### `new SecureEventEmitter(types, emitterKey, [validator])`

- `types` **string[]**  : All event types․
- `emitterKey` **string | symbol** : Emitter Key: Without which we cannot perform **.emit()**
- `validator` **function**: Function for validating emitted values

```js
import {SecureEventEmitter} from 'secure-event-emitter'

// create emitterKey
const emitterKey = Symbol()

// create myEmitter instance
const myEmitter = new SecureEventEmitter(
    ['event-1', 'event-2'], // all event types
    emitterKey      // emitter key is an any Symbol or String type value
)

// add listeners
myEmitter.on('event-1', (a, b) => {
    console.log(a, b)
})
myEmitter.on('event-2', (x) => {
    console.log(x)
})

myEmitter.unlock(emitterKey).emit('event-1', 2021, 2022)
myEmitter.unlock(emitterKey).emit('event-2', 123)

```

### Validator Function

```js
import {SecureEventEmitter} from 'secure-event-emitter'

// create emitterKey
const emitterKey = Symbol()

// create validator function
const validator = (x) => {
    if (typeof x !== 'number') {
        return 'Can emit only numbers!' // error message
    }
}

// create myEmitter instance
const myEmitter = new SecureEventEmitter(
    ['event-1', 'event-2'],
    emitterKey,
    validator,
)

// add listeners
myEmitter.on('event-1', (x) => {
    console.log(x)
})
myEmitter.on('event-2', (x) => {
    console.log(x)
})

myEmitter.unlock(emitterKey).emit('event-1', 2021)
myEmitter.unlock(emitterKey).emit('event-2', '2021') // TypeError: Can emit only numbers!

```

## SingularEventEmitter

**SingularEventEmitter** is a special case of **SecureEventEmitter** where each emitter is designed to trigger one type of event․

### basic usage

```js
import {SingularEventEmitter} from 'secure-event-emitter'

// create emitterKey
const emitterKey = Symbol('My Singular Emitter Key')

// create onFoo instance
const onFoo = new SingularEventEmitter(
    emitterKey      // emitter key is an any Symbol type value
)

// add listeners
onFoo.on((a) => {
    // ...
})
onFoo.on((a) => {
    // ...
})


onFoo.unlock(emitterKey).emit(2021)
onFoo.unlock(emitterKey).emit(2022)

```

## Payload

**Payload** is a class with which we can create objects that meet certain standards

### basic usage

```js
import {Payload} from 'secure-event-emitter'

// first argument is an origin, can be only symbol type and required
const payload_1 = new Payload(Symbol('My Origin 1'), 1, 2, 3)
// {
//     origin: Symbol('My Origin 1'),
//     args: [1, 2, 3],
//     meta: {
//         date: 545125412152,
//         _index: 1
//     }
// }

const payload_2 = new Payload(Symbol('My Origin 2'), 'a', 'b')
// {
//     origin: Symbol('My Origin 2'),
//     args: [1, 2, 3],
//     meta: {
//         date: 54512541999,
//         _index: 1
//     }
// }

```

## Handler

**Handler** is a decorator function that accepts a function and returns a function that can only accept Payload instances in its argument.

### basic usage

```js
import {Handler, Payload} from 'secure-event-emitter'

const myHandler = Handler((payload) => {
    // ...
})

myHandler(new Payload(Symbol('my origin'), 1, 2, 3)) // OK
myHandler(2021) // TypeError('handler argument type must be a [[Payload]] class objects')


```

## useListener

**useListener** is a helper hook for use emitter in react component

### basic usage

```js
import {useListener} from 'secure-event-emitter/react'

// ...
// ...
useListener(emitter, 'event-type', () => {
    // ...
})
// ...
// ...


```

## Authors

- [Ruben Arushanyan](https://github.com/ruben-arushanyan)

## License

[MIT](https://github.com/ruben-arushanyan/secure-event-emitter/blob/master/LICENSE)
