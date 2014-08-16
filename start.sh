cd /tmp

# try to remove the repo if it already exists
rm -rf mydockerapp; true

git clone https://github.com/eviking/mydockerapp.git

cd mydockerapp

npm install

node .
