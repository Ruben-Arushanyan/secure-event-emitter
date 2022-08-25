---
sidebar_position: 3
---

We can define a strict payload structure and emitter can only work with that structured data.

## Usage Example

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