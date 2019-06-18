FROM arm32v7/influxdb:latest

# mount the usb drive
COPY usb_mount_entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

COPY influxdb.conf /etc/influxdb
