#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn parcel build src/index.html --public-url ./ts-toys

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

rm -rf .git

git init
git add .
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:sheben404/react-ts-echarts.git master:gh-pages

cd -