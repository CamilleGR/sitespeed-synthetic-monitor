#! /bin/bash
kubectl apply -f configmap/
kubectl apply -f controllers/
kubectl apply -f services/
kubectl apply -f cronJob/
