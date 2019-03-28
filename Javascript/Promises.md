
# JavaScript Promises

## Table of Contents
<details>
<summary>Page Navigation</summary>
 
* [`Quick Highlights`](#Highlights)
* [`Create a Promise with Resolve`](#With-Resolve)
* [`Create a Promise with Reject`](#With-Reject)
* [`Chaining Promises`](#Chaining-Promises)
* [`Promise.all and Promise.race`](#Promise.all-Promise.race)
</details>

#### Highlights
<details>
<summary>Quick Highlights</summary>

 * Pass a promise around like any other object
 * May or may not be obtained in the future
 * Common use case for making an ajax call

[⬆ Back to top](#table-of-contents)
</details>

#### With Resolve
<details>
<summary>Create a Promise with Resolve</summary>

 * Create a new Promise with a function that has two arguments  (resolve, reject)
 ```
 new Promise(function(resolve, reject){
   console.log("this code runs right away")
 })
 ```
 * use 'then' to handle the result of a promise 
 * You cannot cancel a promise once its being processed and you cant check on its current state either 
 * You can use setTimeout method to simulate an external service
 ```
 new Promise(function(resolve, reject){
   console.log("this code runs right away")
   setTimeout(function(){
     resolve("Nick is awesome")}, 3000);
   })
   .then(function(result){
     console.log(result)
 })
 ```
 outputs
 ```
 this code runs right away
 ---3 seconds wait---
 Nick is awesome
 ```
 [⬆ Back to top](#table-of-contents)
</details>

#### With Reject
<details>
<summary>Create a Promise with Reject</summary>

* use a 'catch' handler to define logic to be execute when errors occur 
 ```
 new Promise(function(resolve, reject){
   console.log("this code runs right away")
   setTimeout(function(){
     reject("Nick is awesome")}, 3000);
   })
   .then(function(result){
     console.log("'then' function called" + result)
  })
  .catch(function(error){
      console.log("'catch' function called" + error)
  })
 ```
 * the 'then' method takes two arguments like a promise. 1 function to be called if the promise is fulfilled and another to be called on rejection
 * both are optional
 * you can pass in a null value if you just and to specify something to be called on rejection
 ```
  new Promise(function(resolve, reject){
   console.log("this code runs right away")
   setTimeout(function(){
     reject("Nick is awesome")}, 3000);
   })
   .then(null, function(error){
     console.log("'then' function called for error" + error)
  })
 ```
 * You can create immediately rejected for resolved promises that can be useful for testing scenarios:
 ```
  var p1 = Promise.reject( 
    new Error("fail");
  )
  var p2 = Promise.resolve();
 ```
 [⬆ Back to top](#table-of-contents)
</details>

#### Chaining Promises
<details>
<summary>Chaining Promises</summary>

* Chain promises together with the 'then' method
 ```
 new Promise(function(resolve, reject){
   console.log("this code runs right away")
   setTimeout(function(){
     resolve("Nick is awesome")}, 3000);
   })
   .then(function(result){
     console.log("'then' function once" + result)
  })
  .then(function(result){
     console.log("'then' function twice" + result)
  })
  .then(function(result){
     console.log("'then' function three times" + result)
  })

 ```
 * with arrow functions
 ```
  new Promise(
    (resolve, reject) => {
     resolve("Nick is awesome")
    })
   })
   .then(res => console.log("first" + res))
   .then(res => console.log("second" + res))
   .then(err => console.log("err or error" + err))
   
 ```
 [⬆ Back to top](#table-of-contents)
</details>

#### Promise.all Promise.race
<details>
<summary>Promise.all and Promise.race</summary>

* Promise.all accepts an array of promises and waits until all have completed.
* Useful to make sure all necessary code has been completed before continuing.
* The reject method is called immediately if any of the supplied promises are rejected
 ```
 Promise.all([p1, p2, p3])
 .then(values => {
   console.log(values);
 })
 ```
 * Promise.race is like what it sounds like. You an array of promises to use the first result returned. 
 ```
 Promise.race([p1,p2,p3])
 .then( values => {
   console.log("completed" + values )
 })
 ```
 Extra Working Examples 
 ```
 cont p1 = new Promise( resolve => 
 setTimeout(() => resolve('a'), 5000))
 cont p2 = new Promise( resolve => 
 setTimeout(() => resolve('a'), 300))
 cont p3 = new Promise( resolve => 
 setTimeout(() => resolve('a'), 9000))

 Promise.all([p1, p2, p3])
 .then(res => console.log(res))

 Promise.race([p1, p2, p3])
 .then(res => console.log(res))
 ```
 Outputs
 ```
 // promise.all
 ['a', 'b', 'c']

 // promise.race
 'b'
 ```
 [⬆ Back to top](#table-of-contents)
</details>

[⬆ Back to top](#table-of-contents)