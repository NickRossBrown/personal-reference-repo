# Docker Commands

## Table of Contents
<details>
<summary>Page Navigation</summary>
 
* [`General Commands`](#General-Commands)
* [`List all running containers`](#List-all-running-containers)
* [`About docker run`](#about-docker-run)
* [`Delete stopped containers`](#delete-stopped-containers)
* [`Get logs from a container`](#get-logs-from-a-container)
* [`Stop a Container`](#Stop-a-Container)
* [`Kill a Container`](#Kill-a-Container)
* [`Additional command inside of a container`](#additional-command-inside-of-a-container)
* [`Tagging an image`](#Tagging-an-image)
* [`Docker compose`](#docker-compose)
* [`Build`](#build)
* [`Using docker volumes`](#using-docker-volumes)
* [`Run test `](#run-test )
* [``](#)

</details>


## General Commands
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

[⬆ Back to top](#table-of-contents)

## List all running containers
commonly used to get a container id
```
$ docker ps
```
all container been run on machine
```
$ docker ps --all
```

[⬆ Back to top](#table-of-contents)

## about docker run
docker run = docker create + docker start

[⬆ Back to top](#table-of-contents)

## delete stopped containers
```
$ docker system prune
```

[⬆ Back to top](#table-of-contents)

## get logs from a container
```
$ docker logs <container id>
```
[⬆ Back to top](#table-of-contents)

## Stop a Container
* send SIGTERM (terminal signal => shut down itself down) and do a little cleanup)  
* If the container does not automatically stop in 10 seconds then Dockers going to automatically fall back to issuing the docker kill command.
```
$ docker stop <container id>
```

[⬆ Back to top](#table-of-contents)

## Kill a Container
send SIGKill (terminal signal => shut down right now) 
```
$ docker kill <container id>
```
[⬆ Back to top](#table-of-contents)

## additional command inside of a container
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

[⬆ Back to top](#table-of-contents)

## Tagging an image
```
$ docker build -t yourDockerId/RepoORProject-Name:version .
```
* -t yourDockerId/RepoORProject-Name:version => tags the image
* the ' . ' specifies the directory of the files/folders to use for the build

[⬆ Back to top](#table-of-contents)

## docker compose
* one of the big purposes of Darker compose is to just avoid having to write out all these really annoying tiny little options every time you want to start up a container 
* The other big thing that docker compose is going to do for us is it's going to make it very easy and very straightforward to start up multiple docker containers at the same time and automatically connect them together with some form of networking and it's all going to happen behind the scenes for us quite automatically.
* add a docker-compose.yml file to set up all the 'services' (referring to different containers) that goes to the docker cli
```
$ docker-compose up
```
* creates an instance of all the container, or images, or services listed inside our compose file (docker-compose.yml)

```
$ docker-compose up --build
```
* start up the containers again but rebuild them ahead of time
```
$ docker-compose up -d
```
* start up containers in the background
```
$ docker-compose down
```
* stop all of our running containers (easy to remember => opposite of going up is down)
```
$ docker-compose ps
```
* run in project directory, docker will find all listed containers and return their status

[⬆ Back to top](#table-of-contents)

## build 
```
$ docker build -f Dockerfile.dev .
```
* name the dockerfile .dev in development so its purpose for being used in development is clear
* the new dockerfile needs -f for docker to find the file

[⬆ Back to top](#table-of-contents)

## using docker volumes
```
$ docker run -p 3000:3000 -v /app/node_modules -v$(pwd):/app <image id>
```
-v /app/node_modules
* means put a bookmark on the node_modules folder

-v$(pwd):/app
* Map the pwd into the '/app' folder
* pwd => present working directory

[⬆ Back to top](#table-of-contents)

## run test 
```
$ docker run -it 4c8116267596 npm run test
```

[⬆ Back to top](#table-of-contents)
