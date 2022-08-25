---
sidebar_position: 2
title: SecureEventEmitter
---

# Class:  `SecureEventEmitter`

## API

### `new SecureEventEmitter(types, emitterKey, [validator])`


- `types` **string[]**  : All event types․
- `emitterKey` **string | symbol** : Emitter Key: Without which we cannot perform **.emit()**
- `validator` **function**: Function for validating emitted values


## Usage Example

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