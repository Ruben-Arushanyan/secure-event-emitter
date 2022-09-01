# [Secure Event Emitter](https://secure-event-emitter.js.org)

> You can find the full documentation on the <https://secure-event-emitter.js.org>

**secure-event-emitter** is a tiny javascript package that uses restrict rules and mechanisms to build safer and protected event-driven architecture. It's similar to nodejs [EventEmitter](https://nodejs.org/api/events.html), but dictates stricter rules to prevent misuse.

## The Main Features

- All event types must be **predefined**․
- Not possible to call the `emit()` method anywhere without the **emitterKey**.
- Ability to **validate** emitted values․

## Installation

```bash
npm install secure-event-emitter
```

## SecureEventEmitter

SecureEventEmitter is the main constructor for creating emitter instances.

#### Import

```js
import {SecureEventEmitter} from 'secure-event-emitter'
```
#### Syntax
#### `new SecureEventEmitter(eventTypes, emitterKey, validator?)`


- **eventTypes** `<string[]>`\
    An non-empty array of all event types.

- **emitterKey** `<string>` | `<symbol>`\
    Any string or symbol value without which we won't be able to call the `.emit()` method.

- **validator** `<Function>`\
    Function to validate the emitted values․ The function receives the emitted values in the argument and returns an error message if something is wrong there.

#### Usage

```js
import {SecureEventEmitter} from 'secure-event-emitter'

const eventTypes = ['event-1', 'event-2']
const emitterKey = Symbol()

const myEmitter = new SecureEventEmitte(eventTypes, emitterKey)

myEmitter.on('event-1', (a, b) => {
    console.log(a, b)
})

myEmitter.on('event-2', (x) => {
    console.log(x)
})

myEmitter.unlock(emitterKey).emit('event-1', 2021, 2022)
myEmitter.unlock(emitterKey).emit('event-2', 123)

```

<br/>

### Validator

We can define a validator function to validate the emitted values.

The function receives the emitted values in the argument and returns an error message if something is wrong there.

#### Example

This example defines a validator function that ensures that the emitter can emit only numbers.

```js
const validator = (x) => {
    if (typeof x !== 'number') {
        return 'Can emit only numbers!' // error message
    }
}
```
#### Usage

```js
import {SecureEventEmitter} from 'secure-event-emitter'

const eventTypes = ['event-1']
const emitterKey = Symbol()
const validator = (x) => {
    if (typeof x !== 'number') {
        return 'Can emit only numbers!' // error message
    }
}

const myEmitter = new SecureEventEmitte(eventTypes, emitterKey, validator)

myEmitter.on('event-1', (a) => {
    console.log(a)
})


myEmitter.unlock(emitterKey).emit('event-1', 2021)
myEmitter.unlock(emitterKey).emit('event-1', '2021') // TypeError: Can emit only numbers!

```

<br/>
<br/>

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
