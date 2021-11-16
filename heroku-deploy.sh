#!/bin/bash
set -e

GIT_HASH=$(git rev-parse --short HEAD)
GIT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
APP_NAME=$1

deploy() {
    APP_NAME=$1
    GIT_BRANCH=$2
    git push --force https://git.heroku.com/${APP_NAME}.git ${GIT_BRANCH}:refs/heads/master
}

set -x

deploy ${APP_NAME} ${GIT_BRANCH}
