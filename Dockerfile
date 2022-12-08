FROM node:14.17.0-slim

# Create app directory
RUN mkdir -p /usr/src/app
COPY . /usr/src/app
WORKDIR /usr/src/app

RUN rm -rf yarn.lock
RUN rm /usr/local/bin/yarnpkg
RUN rm /usr/local/bin/yarn
RUN npm install -g yarn

RUN yarn --network-timeout 100000
RUN cp ./src/config/config.staging.ts ./src/config/index.ts
RUN yarn build

EXPOSE 5000

RUN printf "#!/bin/sh \n\
  yarn start:prod \n\
  " > /usr/src/app/run.sh
RUN chmod +x /usr/src/app/run.sh
CMD [ "/usr/src/app/run.sh" ]
