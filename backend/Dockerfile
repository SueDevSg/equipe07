FROM node:lts-alpine

RUN apk add --no-cache bash

RUN mkdir -p /home/node/.npm/_logs && chown -R node:node /home/node/.npm

RUN npm install -g prisma

RUN npm install -g @nestjs/cli

USER node

WORKDIR /home/node/app