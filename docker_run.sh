#!/bin/bash
#
# Script para gerar um Docker Image
# Versão 1.0
# Soriano
# 08/02/2023

MONGO_URI="$1"

docker rm -f revelacao
docker rmi revelacao
docker build -t revelacao:latest .
docker run -d --name revelacao -p 9001:9001 -e MONGO_URI=$MONGO_URI revelacao:latest
