#!/bin/sh

set -x

npm run lint && \
npm run dist && \
LIB_DIR=dist npm run test -- --no-cache && \
npm run compile && \
LIB_DIR=lib npm run test -- --no-cache && \
LIB_DIR=es npm run test -- --no-cache && \
npm run test
