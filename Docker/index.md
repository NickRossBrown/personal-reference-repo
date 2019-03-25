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
COPY 
* general layout COPY ./ ./
* first ./ => Path to folder to copy from on *you machine* relative to build context
* second ./ => Place to copy stuff to inside *the Container*

#### alpine
* an alpine version a very stripped down version of that image
* ex) node:apline

#### Tagging an image
```
$ docker build -t yourDockerId/RepoORProject-Name:version .
```
* -t yourDockerId/RepoORProject-Name:version => tags the image
* the ' . ' specifies the directory of the files/folders to use for the build

#### docker compose
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


###build 
```
$ docker build -f Dockerfile.dev .
```
* name the dockerfile .dev in development so its purpose for being used in development is clear
* the new dockerfile needs -f for docker to find the file

### using docker volumns
```
$ docker run -p 3000:3000 -v /app/node_modules -v$(pwd):/app <image id>
```
-v /app/node_modules
* means put a bookmark on the node_modules folder

-v$(pwd):/app
* Map the pwd into the '/app' folder
* pwd => present working directory

### run test 
```
$ docker run -it 4c8116267596 npm run test
```
