#!/usr/bin/env bash

ng build --prod
yarn run storybook-deploy
firebase deploy
rm -rf dist
firebase open hosting:site
