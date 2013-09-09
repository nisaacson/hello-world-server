function install_json_extract {
  command -v json-extract > /dev/null 2>&1
  if [ $? -eq 0 ]; then
    return
  fi
  echo '-----> installing json-extract now'
  sudo npm install -g --silent json-extract
}

install_json_extract

PORT=$(json-extract --file ./dd-config.json --key ports.0)
export PORT=$PORT
./start-web.js
