# Module

## Table of Contents
<details>
<summary>Page Navigation</summary>
 
* [`module definition`](#Definition)
* [`Potential Problems and Concerns`](#Potential-Problems)
* [`Rule Sets`](#Rule-Sets)
* [`Module Systems`](#Module-Systems)
* [`CommonJS`](#CommonJS)
* [`AMD`](#AMD)
* [`ES2015`](#ES2015)
* [``](#)

</details>

## Definition
A JavaScript module is a single JavaScript file that contains some small amount of code.

## Potential Problems
* It's a very codified, very distinct order of loading different files into our application.
    - We need to think a lot about the order in which our code is executed.
* The more files we have, the slower load time for our page. (And this is especially true on mobile devices.)

## Rule Sets

* the JavaScript world has several different rule sets for determining how JavaScript modules behave.
* you might have to use a different module system just to link these different modules or these different files

## Module Systems

* module systems are rule sets for defining how different files should be linked together inside of an application.

* CommonJS
* AMD
* ES2015

## CommonJS

* whenever you write node js code or code that is executed essentially outside of the browser, chances are that you're using the CommonJS module system.
* You can recognize the use of CommonJS by the syntax that is used to exchange code between the different files.

* In particular, you're going to want to be looking for require statements - require statements and module.exports statements.

## AMD

* an acronym for asynchronous module definition.
* AMD is more commonly used in front-end applications, where different modules of code can be loaded up asynchronously.
* You can recognize the use of AMD by looking - or by seeing keywords like define and require.

## ES2015

* You can recognize this module system by looking for words like export and import statements.
* Modern web development is really headed towards ES2015 code.




