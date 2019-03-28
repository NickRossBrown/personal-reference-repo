# Docker File Instructions

## Table of Contents
<details>
<summary>Page Navigation</summary>
 
* [`Docker File Instructions`](#Docker-File-Instructions)
* [`Note about alpine`](#alpine)
* [`File examples`](#example-files)
* [``](#)

</details>

## Docker File Instructions
FROM
* Used to specify the docker image we want to use as a base
* ex) like initial operating system on a computer wanted to install chrome
RUN
* execute some command while we are preparing our image
* ex) like navigating to a website and running chrome installer 
CMD
* What should be executed when our image is used to start up a brand new container
* ex) execute chrome.exe
COPY 
* general layout COPY ./ ./
* first ./ => Path to folder to copy from on *you machine* relative to build context
* second ./ => Place to copy stuff to inside *the Container*

[⬆ Back to top](#table-of-contents)

## alpine
* an alpine version a very stripped down version of that image
* ex) node:apline

## Example Files

<details>
<summary>Example Dropdown list</summary>

* [Simple redis server](docker-compose-examples/redis-server-simple.yml)
* [``](#)
</details>

[⬆ Back to top](#table-of-contents)