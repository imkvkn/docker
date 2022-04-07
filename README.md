commands:
See list of containers:

docker ps [-a -aq ] (q is for containerid which are quite)

export FORMAT="ID\t{{.ID}}\nNAME\t{{.Names}}\nIMAGE\t{{.Image}}\nPORTS\t{{.Ports}}\nCOMMAND\t{{.Command}}\nCREATED\t{{.CreatedAt}}\nSTATUS\t{{.Status}}\n"

docker ps --format=$FORMAT


==========================================================================

Dockerfile
commands in it example RUN,FROM,CMD,WORKDIR,ADD

==========================================================================


.dockerignore

to include files which u want to ignore

==========================================================================

**see images:**

docker images or docker image ls

===========================================================================

build image:
docker build -t(for tag) name_of_tag:latest

===========================================================================

run container using image:
docker run image_name:version(usually latest)


docker run --name name_of_container -d (*for detach mode*) -p 8000:80 image_name:version

8000 is host(browser port)
80 is container port

===========================================================================

for exploring container:

docker exec -it <containerid> /bin/sh
