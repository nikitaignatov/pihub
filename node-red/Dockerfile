FROM nodered/node-red-docker:rpi-v8

USER root
RUN apt-get update && apt-get install nano
USER node-red

RUN npm install node-red-dashboard
RUN npm install node-red-contrib-credentials
#RUN npm install node-red-contrib-zigbee

# db

RUN npm install node-red-contrib-influxdb
#RUN npm install node-red-contrib-mssql-plus

# services

#RUN npm install node-red-contrib-todoist
RUN npm install node-red-contrib-google
RUN npm install node-red-contrib-slack
RUN npm install node-red-node-openweathermap

# utils

RUN npm install node-red-contrib-bigtimer
RUN npm install node-red-contrib-mqtt-json
RUN npm install node-red-contrib-aggregator
RUN npm install node-red-contrib-moment
RUN npm install node-red-contrib-statistics
RUN npm install node-red-contrib-state-machine
#RUN npm install node-red-contrib-loop-processing
#RUN npm install node-red-contrib-spreadsheet-in

COPY ./settings.js /data/settings.js
