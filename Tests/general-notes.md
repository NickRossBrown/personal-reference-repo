# Webpack index

## Table of Contents
<details>
<summary>Page Navigation</summary>
 
* [`Why use tests`](#Why-use-tests)
* [`Unit Tests`](#Unit-Tests)
* [`Integration Test`](#Integration-Test)
* [`Automatic tests, or UI tests`](#Automatic-tests)

</details>

## Why use tests

* A big part of any major software company 
* Runs in development, not in production
* In the long run, if your project is a certain size it is better to write tests

## Unit Tests

* Most common, cheapest to implement, easiest to implement, most important to have in application 
* 90% of of your time writing tests will be writing unit tests
* Test functions and classes 

## Integration Test

* Testing how different pieces of code work together
* Examples 
    - testing of whether the database works with the express app that's requesting some data from the database
    - it could be how a function works with another function and how this connection

## Automatic tests

* usually involves testing real life scenarios on the browser by controlling the browser and making sure that the expected behavior on the web is correct.

* You can have humans doing this where they go through and click through everything on your Web site and make sure everything works. 
    - Or you can programmatically have robots or code that you write that runs through these tests for you
