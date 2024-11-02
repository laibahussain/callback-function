// callback function is a function(goodbye) that is passed as an argument to another function(hello)

hello(goodbye)

function hello(callback){
console.log("hello")
callback()
}

function goodbye(){
console.log("Goodbye")
}

// callback hell is a situation in asynchronous programing when multiple nested callbacks are used due to which code readability and maintanability suffers. to avoid it promises or async/await can be used 