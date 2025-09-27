const EventEmitter = require("events")

// create an instance of event emitter

const emitter = new EventEmitter()

// define an event handler

// emitter.on("greet", () => {
//     console.log(`Hello, muhammad zeb`)
// })

// // trigger (emit ) event

// emitter.emit("greet")


// emitter.on("greet", (name) => {
//     console.log(`Hello, ${name}!`)
// })

// // trigger (emit ) event

// emitter.emit("greet", "John")

emitter.on("greet", (name) => {
    console.log(`Hello, ${name.name} ${name.age}!`)
})

// trigger (emit ) event

emitter.emit("greet", { name: "Alice" , age: 25 })