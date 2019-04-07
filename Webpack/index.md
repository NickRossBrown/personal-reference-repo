# Webpack index

## Table of Contents
<details>
<summary>Page Navigation</summary>
 
* [`Purpose of Webpack `](#Purpose-of-Webpack )
* [`Configuration`](#Configuration)
* [`Module Loaders or Rules`](#Module-Loaders)
* [`Babel`](#Babel)
* [``](#)
* [``](#)
* [``](#)
* [``](#)

</details>

## Purpose of Webpack 

* The purpose of webpack is to take a big collection of tiny little javascript modules and merge them all into one big javascript file while also ensuring that each module is executed in the correct order.
* Webpack's primary purpose is to take a big old pile of javascript modules and merge them all together.
* webpack of course has the ability to do many other things as well but again, this is its core purpose.

## Configuration 

* configuration is done inside of a file that we usually call "webpack.config.js"

* Webpack is going to read the contents of this file, and based on the instructions that we provide inside of it, takes some operation on our codebase.

* there's these two minimum properties that we have to define inside of this config object.
    1. entry property
        - the first file that it should execute when our application starts up in the browser.
        - Webpack will look at what our entry point file imports and then look at what those file import and look at what those file import and you kind of can imagine this tree structure that forms as Webpack starts at the entry point and then starts crawling through all the associated require statements.
    2. output property
        - tells webpack where to take this big all bundle.js that is formed up out of all of our separate javascript modules, and where to save that file to and not only where to save it to but also what to name it.
* the way that you use the locally installed version is setting up an npm script for it.

## Module Loaders
* Loaders are commonly used to implement transpiling for ES2015 code (like Babel)

* Loaders are used to handle CSS, handle images, all different types of files can be enabled for use with Webpack by the use of these module loaders.

* loaders are used to enhance the behavior of Webpack in some fashion

* In Webpack 1 we referred to these pre-processing steps as "loaders" but in Webpack 2 they're officially called part of the module system and each individual loader is referred to as a rule.

## Babel 

* Rather than shipping a single library that has some code knowing how to deal with each one of these different dozen build systems,

* There are three separate modules just to get Babel working.
    - babel-loader
    - babel-core
    - babel-preset-environment or env.
* babel-loader
    - Teaches babel how to work with webpack 
* babel-core
    - Really the heart of Babel
    - It's what knows how to take some input code, like the code that we write, transform it in some fashion (parse it), and then spit individual output files back to whoever invoked it
    - So the real secret of babel-core, however, is that it doesn't actually do anything. It doesn't actually transpile or change or transform any code.
* babel-preset-environment
    - Ruleset for telling babel exactly what pieces of ES2015/6/7 syntax to look for, and how to turn it into ES5 code
        * tells Babel to specifically look for things like the const or let keywords, and turn them into vars
        * look for arrow functions and turn them into function
        * how to handle class statements