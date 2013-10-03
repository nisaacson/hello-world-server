#!/bin/bash

PORT=${PORT:-3000}
URL=localhost:$PORT

while true
do
  echo "try to connnect to server at url $URL"
  curl $URL
  if [ $? -eq 0 ];
    then break
  fi
  sleep '2s'
done
