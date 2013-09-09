#!/bin/bash

install_json_extract() {
  command -v json-extract > /dev/null 2>&1
  if [ $? -eq 0 ]; then
    return
  fi
  echo '-----> installing json-extract now'
  npm install -g json-extract
}

install_json_extract

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
CONFIG_PATH="$DIR/dd-config.json"
echo "reading config at path: $CONFIG_PATH"
PORT=$(json-extract --file $CONFIG_PATH --key ports.0)

export PORT=$PORT
cd $DIR && npm install
$DIR/start-web.js
