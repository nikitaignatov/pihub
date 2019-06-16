FROM nodered/node-red-docker:rpi-v8

USER root
RUN apt-get update && apt-get install nano
USER node-red

RUN npm install node-red-dashboard
RUN npm install node-red-contrib-credentials

COPY ./settings.js /data/settings.js
