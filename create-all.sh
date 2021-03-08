#! /bin/bash

kubectl create -f configmap/
kubectl create -f controllers/
kubectl create -f services/
kubectl create -f cronJob/
