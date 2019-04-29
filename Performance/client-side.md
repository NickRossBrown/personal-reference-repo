# Client Side

## Table of Contents
<details>
<summary>Page Navigation</summary>
 
* [`Critical Render Path`](#Critical-Render-Path)
* [`JS file placement`](#JS-file-placement)
* [`CSS render blocking`](#CSS-render-blocking)
* [`JS <script> options`](#script-options)
* [``](#)
* [``](#)
* [``](#)

</details>

## Critical Render Path

1. DOM
2. CSSOM
3. Render Tree
4. Layout
5. Paint

* The Five Steps Explained 

1) The browser parses or read the HTML it incrementally generates this tree model of the HTML tags
2) And this Dom describes the contents of the page but then just as it's about to start doing that it encounters a style link to grab the CSS
    - Now once the browser receives all the CSS it also starts generating a tree model called CSS object model (CSSOM) has the styling information attached to the tree nodes 
        - this tree describes how the content is styled and it's working and it's working and is building this tree 
3) and then it's also going to read the javascript file
    - this javascript file is read by the browser and executes any changes that it might want onto the DOM and the CSS
4) Now once all that's done the browser combines the DOM and the CSS OM arm into a render tree
    - the browser then uses this render tree to figure out the layout
5) Then it is going to paint all the pixels

## JS file placement

* Javascript requires the HTML + CSSOM parsing to finish before it can be run
* putting javascript in the head tag in a HTML blocks page rendering scripts
    - historically blocked additional resources from being downloaded more quickly
* placing them at the bottom or by placing them at the bottom you're style content and media could start downloading more quickly given the perception of improved performance
    - Something can show up on the page faster
* exceptions => google analytics

## CSS render blocking

## script options
```
https://stackoverflow.com/questions/10808109/script-tag-async-defer
```
<script async >
```
* does core functionality requires js? use async
* Not block loading of page
* Add them to anything that doesn't affect the dom

```
<script defer>
```
* does core functionality does require js? use async
* Wait until html is completely parsed then render