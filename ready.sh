#!/bin/sh

install_json_extract() {
  command -v json-extract > /dev/null 2>&1
  if [ $? -eq 0 ]; then
    return
  fi
  echo '-----> installing json-extract now'
  npm install -g --silent json-extract
}

install_json_extract

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
CONFIG_PATH="$DIR/dd-config.json"
echo "reading config at path: $CONFIG_PATH"
PORT=$(json-extract --file $CONFIG_PATH --key ports.0)
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
