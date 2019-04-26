# Testing Tools

## Table of Contents
<details>
<summary>Page Navigation</summary>
 
* [`Testing Library`](#Testing-Library)
* [`Top three JS testing libraries`](#Top-three-JS-testing-libraries)
* [`Assertion Library`](#Assertion-Library)
* [`Assertion Functions`](#Assertion-Functions)
* [`three JS Assertion libraries`](#three-JS-Assertion-libraries)
* [`Test Runner`](#Test-Runner)
* [`Puppeteer`](#puppeteer)
* [`jsdom`](#jsdom)
* [`Mock spies and Stubbs`](#Mock-spies-and-Stubbs)
* [`Code Coverage`](#Code-Coverage)
* [`Simple => how to choose what library combinations`](#how-to-choose-what-library-combinations)
* [``](#)
* [``](#)



</details>

## Testing Library

* Self-explanatory

* This is the scaffolding giving us the ability to use some function calls and some new methods for us to actually write our tests

## Top three JS testing libraries

* Jasmine
* Jest
* Mocha

* Available on NPM and you can add them to build to your scaffolding

## Assertion Library

* It's essentially a tool to allow you to test that the variables contain the expected value

## Assertion Functions

* It's essentially a tool to allow you to test that the variables contain the expected value
* Kind of reads like english

## three JS Assertion libraries

* Jasmine that comes with its own assertion library
* Jest that comes with its own assertion library
* Chai usually gets paired with Mocha in order to provide functions that our assertion functions

## Test Runner

* Jasmine, Jest, and Mocha include a test runner in its own library
* Karma allows you to run test in the browser

## Puppeteer

* by Google which is what we call a headless browser
* node library which provides a high level API to control the headless version of their browser
* So think of it as a stripped down browser that makes your tests a little bit faster

* Can be configured to do things such as:
    - generate screenshots PDSA of pages
    - automate form submissions
    - UI testing
    - other cool things

## jsdom

* jsdom implements javascript so we can have a dom like API to work without actually needing the browser
* javascript implementation of the DOM.
* So it's not the real Dom but a fake javascript version of it
    - remember the DOM is that tree like structure that shows the nodes on our webpage and that's what makes

## Mock spies and Stubbs

* Jasmine and Jest come with their own version
* If you're using something like Mocha (most popular example) just like you had to add an assertion on library you'll have to add something called Sinon.js
* Spies provide for us information about functions
    - How many times they were called in what cases and by who
* Stubbing replaces selected functions with a function to ensure that the expected behavior happens 
* Mock is kind of like faking a function or a behavior to test different parts of a process
    - this might be really really good for integration tests

## Code Coverage

* Istanbul
* Jest has it own code coverage
* Gives a report of where and how many lines ood code are missing tests

## how to choose what library combinations

* if you want a fast framework that can handle everything and has everything in one wall just use Jest
* if you want a very flexible extendable configuration where you can plug in some things then use Mocha
    - A harder to set up because we need to add on things like Chai and Sinon.js but it's more flexible.