# Secure Event Emitter

## Description

**secure-event-emitter** is a tiny javascript package (for the *browsers* and *node.js*) that uses restrict rules and mechanisms to build safer and protected event-driven architecture. It's similar to nodejs [EventEmitter](https://nodejs.org/api/events.html), but dictates stricter rules to prevent misuse.

## The Main Features
- All **event types** that the emitter can use must be defined․
- We can not emit events anywhere without **emitterKey**․
- We can define a strict **payload** structure and emitter can only work with that structured data

## Installation

```bash
npm install secure-event-emitter
```

## Usage
```javascript
import {SecureEventEmitter} from 'secure-event-emitter'
// const {SecureEventEmitter} = require('secure-event-emitter')

const event_types = ["abc", "xyz"]
const emitter_key = Symbol('My Emmiter Key')

const myEmitter = new SecureEventEmitter(event_types, emitter_key)

myEmitter.on("abc", (e) => {
    // ...
})

myEmitter.on("xyz", (e) => {
    // ...
})

myEmitter.unlock(emitter_key).emit('abc', 2021)
```


## Maintainers

- [Ruben Arushanyan](https://github.com/ruben-arushanyan)

## License

[MIT](https://github.com/ruben-arushanyan/secure-event-emitter/blob/master/LICENSE)
