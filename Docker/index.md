#Docker

## General Info

* A container is a running process along with a subset of physical resources on your
* a container is really a process or a set of processes that have a grouping of resources specifically
* running process that sends a system call to a kernel. The kernel is going to look at that incoming system call and direct it to a very specific portion of the hard drive the RAM CPI or whatever else it might need.

* any time that we talk about an image we're really talking about a file system snapshot.
*  essentially kind of like a copy paste of a very specific set of directories or files.

* The kernel is a running software process that governs access between all the programs that are running

## Docker Commands

#### General Command
```
docker run <image-name> command!
```
docker 
* reference to docker client

run 
* to try and create a client

image name
* Name fo the image to use for this container

command!
* Default override command

#### List all running containers
commonly used to get a container id
```
$ docker ps
```
all container been run on machine
```
$ docker ps --all
```

#### about docker run
docker run = docker create + docker start

#### delete stopped containers
```
$ docker system prune
```

#### get logs from a container
```
$ docker logs <container id>
```

#### Stop a Container
* send SIGTERM (terminal signal => shut down itself down) and do a little cleanup)  
* If the container does not automatically stop in 10 seconds then Dockers going to automatically fall back to issuing the docker kill command.
```
$ docker stop <container id>
```
#### Kill a Container
send SIGKill (terminal signal => shut down right now) 
```
$ docker kill <container id>
```

#### additional command inside of a container.
```
$ docker exec -it <container id> <command>
```
exec
* run another command

-it
* allow us to provide input to the container
* enters in text

-i
* means that when we execute this new command into the container we want to attach our terminal to the standard in channel of the new running process
-t
* nicely formats text

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