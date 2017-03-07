#!/bin/sh

npm run lint && \
npm run dist && \
npm run test:rn -- -w $MAX_WORKERS && \
npm run test:web --  -w $MAX_WORKERS
