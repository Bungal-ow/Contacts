#!/bin/bash
sudo apt-get update
sudo apt-get update -y
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install 8.17.0
node -e "console.log('Running Node.js ' + process.version)"
sudo apt-get install postgresql postgresql-contrib

#bash step.bash to run 