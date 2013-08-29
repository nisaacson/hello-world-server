URL=localhost:$PORT
while true
do
  echo "try to connnect to server at url $URL"
  curl $URL
  if [ $? -eq 0 ];
    then break
  fi
done
