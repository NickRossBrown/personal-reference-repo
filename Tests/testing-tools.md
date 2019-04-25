# Testing Tools

## Table of Contents
<details>
<summary>Page Navigation</summary>
 
* [`Testing Library`](#Testing-Library)
* [`Top three JS testing libraries`](#Top three JS testing libraries)
* [``](#)
* [`Assertion Library`](#Assertion-Library)
* [`Assertion Functions`](#Assertion-Functions)
* [`three JS Assertion libraries`](#three-JS-Assertion-libraries)
* [`Test Runner`](#Test-Runner)
* [`Puppeteer`](#puppeteer)
* [`jsdom`](#jsdom)
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
