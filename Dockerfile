FROM ubuntu:12.10
RUN apt-get update
RUN apt-get install -y build-essential
RUN apt-get install -y software-properties-common
RUN add-apt-repository -y ppa:chris-lea/node.js
RUN apt-get update
RUN apt-get install -y nodejs
RUN npm install -g npm
RUN npm install -g hello-world-server
CMD hello-world-server
