rm -rf lib
rm -rf dist
npm run babel
rm -rf dist
webpack
node scripts/prenpm.js
tnpm publish $1 $2
rm -rf lib
rm -rf dist
