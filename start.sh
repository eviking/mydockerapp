cd /tmp
rm -rf mydockerapp; true
git clone https://github.com/eviking/mydockerapp.git
cd mydockerapp
npm install
/usr/bin/nodejs index.js
