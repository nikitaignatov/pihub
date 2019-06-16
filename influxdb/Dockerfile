FROM arm32v7/influxdb:latest

COPY usb_mount_entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

COPY influxdb.conf /etc/influxdb
