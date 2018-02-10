#!/bin/bash

# skip if build is triggered by pull request
if [ $TRAVIS_PULL_REQUEST == "true" ]; then
  echo "this is PR, exiting"
  exit 0
fi

# enable error reporting to the console
set -e

# cleanup "_site"
rm -rf _site
mkdir _site

# clone remote repo to "_site"
git clone https://${GITHUB_TOKEN}@github.com/agendaopensource/agendaopensource.github.io.git --branch gh-pages _site
# build with Jekyll into "_site"
bundle exec jekyll build

cd _site

# Revision info
date > lastbuild.txt
echo Travis \#$TRAVIS_BUILD_NUMBER >> lastbuild.txt

# push
git config user.email "travis-ci@agendaopensource.github.io"
git config user.name "Travis CI"
git add --all
git commit -a -m "Travis #$TRAVIS_BUILD_NUMBER"
git push --force origin gh-pages