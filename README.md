# Table of Contents

## Action Plan
<details>
<summary>Overall Structure</summary>

* List things I can do
* JavaScript
* OOP
* CSS
* Communication
</details>

### JavaScript
<details>
<summary>View Snippets</summary>
 
* [`Promises`](#promises)

</details>

### Learning
<details>
<summary>Most effective to help someone learn </summary>

* Show them something first
* So they can see how something works
* Give them a chance to modify an existing example
* Give them a chance to create something from scratch
</details>
<details>
<summary> </summary>

* 
</details>
### Workflow

### Communication


## Snippets
<details>
<summary>View Snippets</summary>
 
* [`Deploy portfolio project on Heroku.`](#portfolio-project)
* [`Make a 30 second code snippet`](#code-snippet)
* [`Attend a monthly meetup of ruby-brigade`](#ruby-brigade-meetup)
* [`Read a section of a chapter in The Well Grounded Rubyist`](#well-grounded-rubyist)
* [`Read a section of a chapter in Practical Object-Oriented Design in Ruby by Santi Metz`](#pratical-object-oriented-design)
* [`Work on Fantasy golf website`](#fantasy-golf-website)
* [`Make a custom league page for my highschool friends' fantasy football league`](#espn-custom-league-page)
* [`Gain additional OAuth experience`](#oauth-experience)
* [`Make a custom league page for my college friends fantast football league`](#yahoo-custom-league-page)
* [`Study to become proficient in R`](#study-r)
* [`Practice Technical Interviews`](#technical-interviews-practice)
* [`Conintue to work on my personal narrative`](#personal-narrative)
</details>

## Priority Goals


### High priority

### Medium priority
### Low priority

## Summary

## JavaScript 

### Promises
<details>
 
<summary>Promises Quick Highlights</summary>

 * Pass a promise around like any other object
 * May or may not be obtained in the future
 * Common use case for making an ajax call
</details>
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
</details>
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
</details>
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
</details>
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
</details>

[⬆ Back to top](#table-of-contents)

## Goal Details
### Portfolio Project
Build a deploy a personal project on heroku
<details>
<summary>Ideas for site</summary>
 * Add resume with an about me page
 * Link Github
 * Link My LinkedIn page
 * Link personal websites that are hosted 
</details>

[⬆ Back to top](#table-of-contents)

### Code Snippet
Add my own 30 second code sinppet to my code sinppet repository for future reference
<details>
<summary>Example</summary>

```
Javascript -> Take a specific player out an array of listed players
players = ["nick","Joe","Erin"...]
draftPlayer(player,i) {
     this.players.splice(i,1)
     this.undraftedPlayers.push(player)
   }
```
</details>

[⬆ Back to top](#table-of-contents)

### Ruby Brigade Meetup
Attend the monthly meetup for the ruby brigade and write a small summary for a my meetup notes repository
<details>
<summary>Write up Meetup summary</summary>
 * State when are where it is
 * List overall events
 * List speakeres
 * give an interesting fact learn

</details>

[⬆ Back to top](#table-of-contents)

### Well Grounded Rubyist
Read a 10 minute sections from the well grounded rubyist. The read sections will container highlights, underlines, and margin notes on the side of the page. 

[⬆ Back to top](#table-of-contents)

### Pratical Object Oriented Design
Read a 10 minute sections from the practical object oriented design book. The read sections will container highlights, underlines, and margin notes on the side of the page. 

</details>

[⬆ Back to top](#table-of-contents)

### Fantasy Golf Website
Finish and deploy my own fantasy golf website using ruby on rails. The site is planned to be hosted on Heroku.

[⬆ Back to top](#table-of-contents)

### Espn Custom League Page
Work on custom league page just for my highschool friends who I play fantasy football with on ESPN. The site will start simple with simple league facts about the league history in ESPN's api. 

[⬆ Back to top](#table-of-contents)

### OAuth Experience
Study OAuth so that I can make a project that allows users to sign in using OAuth. 

[⬆ Back to top ⬆](#table-of-contents)

### Yahoo Custom League Page
Work on custom league page just for my college friends who I play in a additional fantasy football hosted by Yahoo.  The site will start simple with simple league facts about the league history in yahoo's api. 

[⬆ Back to top ⬆](#table-of-contents)

### Study R
I have some experience playing around with and using R so I can work on a small project with one of my friends who got a degree in statistics and writes some programs with R for his job. 
[⬆ Back to top ⬆](#table-of-contents)

### Technical Interviews Practice
Complete one technical interview once a day. The interview will use a full size white board I got in my from and the explinations will be explained out loud to my neighbor's cat who visits my room once almost every night. 

</details>

[⬆ Back to top ⬆](#table-of-contents)

### Personal Narrative
Write down a at least 10 personal narrative stories so I have them readily available to tell me personal narrative at meetups, weddings, intervies, loose friends, etc. 

[⬆ Back to top ⬆](#table-of-contents)

