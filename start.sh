#!/usr/bin/env sh

if [ $prod_env = true ]; then
  pm2-runtime yarn --interpreter sh -- start;
else 
  yarn install;
  yarn dev;
fi
