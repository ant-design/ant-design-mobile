#!/bin/sh

npm run lint && \
npm run dist && \
LIB_DIR=dist npm run test:web && \
npm run compile && \
LIB_DIR=lib npm run test:web && \
LIB_DIR=lib npm run test:rn && \
LIB_DIR=es npm run test:web && \
LIB_DIR=es npm run test:rn && \
npm run test:web && \
npm run test:rn
