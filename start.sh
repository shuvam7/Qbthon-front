#!/bin/bash
echo "start of  qbthonui service"
cd /home/ubuntu/qbthonspartanui
kubectl apply -f qbthon-ui.yml 
kubectl apply -f qbthonui-deployment_temp.yml
echo "end of  qbthonui service"