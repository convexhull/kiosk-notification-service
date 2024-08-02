FROM node:20

WORKDIR /opt/kiosk-notification-service

COPY package.json .

COPY yarn.lock .

RUN yarn install

COPY . .

EXPOSE 6000

CMD ["yarn", "start"]