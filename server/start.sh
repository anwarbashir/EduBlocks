#!/bin/bash

#if [ $(whoami) == 'root' ]; then
#  echo 'Please do not run me as root'
#  exit 1
#fi

SOURCE="${BASH_SOURCE[0]}"
while [ -h "$SOURCE" ]; do # resolve $SOURCE until the file is no longer a symlink
  SCRIPT_DIR="$( cd -P "$( dirname "$SOURCE" )" && pwd )"
  SOURCE="$(readlink "$SOURCE")"
  [[ $SOURCE != /* ]] && SOURCE="$SCRIPT_DIR/$SOURCE" # if $SOURCE was a relative symlink, we need to resolve it relative to the path where the symlink file was located
done
SCRIPT_DIR="$( cd -P "$( dirname "$SOURCE" )" && pwd )"

PROJECT_PATH=$SCRIPT_DIR

NODE_PATH=/usr/bin/node

# Make sure node isnt running somewhere...
pkill node

cd $PROJECT_PATH

# npm start
$NODE_PATH build/index.js
