---
sidebar_position: 1
---

**secure-event-emitter** is a tiny javascript package that uses restrict rules and mechanisms to build safer and protected event-driven architecture. It's similar to nodejs [EventEmitter](https://nodejs.org/api/events.html), but dictates stricter rules to prevent misuse.

## The Main Features

- All event types must be **predefined**․
- Not possible to call the `emit()` method anywhere without the **emitterKey**.
- Ability to **validate** emitted values․

## Installation

```bash
npm install secure-event-emitter
```

## Simple Usage Example


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
