# Node Hello World Server

A very simple node.js http server.

# Port

 The server looks for the following when determining the server port

* `--port <integer>` command line flag
* `process.env["PORT"]`
* `3000` default

# Response
The server responds to all requests with the content `"hello world\n"`

# Installation

```bash
[sudo] npm install -g hello-world-server
```

# Usage

Once the package is installed globally, you can start it on the command line

```bash
# start the server
hello-world-server
```

To run on a

Then connect to the server to make sure it is running. You can visit [http://localhost:3000](http://localhost:3000) in your browser and you should see the text `"Hello World"` appear

Alternatively in the terminal you can use curl to connect to the server.

```bash
curl localhost:3000/
# you should receive "Hello World\n" back
```

If you have changed the server port via `process.env["PORT"]` you will need to change the port in the examples above accordingly


# Docker & Vagrant
You can test this server using Vagrant and Docker.

Builds a container to run a

# Usage

Pull down the image and run the default command

```bash
vagrant up
vagrant ssh
# pull existing image
docker pull nisaacson/hello-world-server
# or build it yourself
docker build $USER/hello-world-server .

# run the server in detached mode
$PORT=4545
docker run -d -i -p 4000:4545 -e PORT=4545 -t nisaacson/hello-world-server:latest
# curl the server to make sure it is running...should get back "hello world\n"
curl localhost:$PORT
```
