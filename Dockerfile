FROM node:latest

WORKDIR /app

RUN apt-get update

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . ./
