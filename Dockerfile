FROM node:14.17.4-alpine as build-stage

WORKDIR /app

COPY package.json ./

RUN yarn install

COPY ./ .

RUN yarn build

FROM flashspys/nginx-static

COPY --from=build-stage /app/build  /static
