---
sidebar_position: 3
---

We can define a validator function to validate the emitted values.

The function receives the emitted values in the argument and returns an error message if something is wrong there.

## Example

This example defines a validator function that ensures that the emitter can emit only numbers.

```js
const validator = (x) => {
    if (typeof x !== 'number') {
        return 'Can emit only numbers!' // error message
    }
}
```

## Usage

```js
import {SecureEventEmitter} from 'secure-event-emitter'

const eventTypes = ['event-1']
const emitterKey = Symbol()
const validator = (x) => {
    if (typeof x !== 'number') {
        return 'Can emit only numbers!' // error message
    }
}

const myEmitter = new SecureEventEmitter(eventTypes, emitterKey, validator)

myEmitter.on('event-1', (a) => {
    console.log(a)
})


myEmitter.unlock(emitterKey).emit('event-1', 2021)
myEmitter.unlock(emitterKey).emit('event-1', '2021') // TypeError: Can emit only numbers!

```