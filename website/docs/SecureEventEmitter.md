---
sidebar_position: 2
---

SecureEventEmitter is the main constructor for creating emitter instances.

## Import

```js
import {SecureEventEmitter} from 'secure-event-emitter'
```
## Syntax
### `new SecureEventEmitter(eventTypes, emitterKey, validator?)`


- **eventTypes** `<string[]>`  
    An non-empty array of all event types.

- **emitterKey** `<string>` | `<symbol>`  
    Any string or symbol value without which we won't be able to call the `.emit()` method.

- **validator** `<Function>`  
    Function to validate the emitted values․ The function receives the emitted values in the argument and returns an error message if something is wrong there.

## Usage

```js
import {SecureEventEmitter} from 'secure-event-emitter'

const eventTypes = ['event-1', 'event-2']
const emitterKey = Symbol()

const myEmitter = new SecureEventEmitter(eventTypes, emitterKey)

myEmitter.on('event-1', (a, b) => {
    console.log(a, b)
})

myEmitter.on('event-2', (x) => {
    console.log(x)
})

myEmitter.unlock(emitterKey).emit('event-1', 2021, 2022)
myEmitter.unlock(emitterKey).emit('event-2', 123)

```