---
sidebar_position: 1
description: This description will override the default
---

# Introduction


**secure-event-emitter** is a tiny javascript package that uses restrict rules and mechanisms to build safer and protected event-driven architecture. It's similar to nodejs [EventEmitter](https://nodejs.org/api/events.html), but dictates stricter rules to prevent misuse.

## The Main Features

- All event types that the emitter can use must be defined․
- We can not emit events anywhere without emitterKey․
- We can define a strict payload structure and emitter can only work with that structured data

## Installation

```bash
npm install secure-event-emitter
```

## Simple Usage Example


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