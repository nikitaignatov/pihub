#!/bin/sh

# Install Docker
curl -sSL get.docker.com | sh && \
  sudo usermod pi -aG docker
    
sudo apt-get -y install python-pip      
sudo pip install docker-compose

docker-compose up
