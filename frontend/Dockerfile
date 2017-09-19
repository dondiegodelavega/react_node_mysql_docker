FROM node:8.4.0

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN npm install
RUN npm cache verify

EXPOSE 3000

CMD npm run start