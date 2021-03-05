#! /bin/bash
kubectl update -f configmap/
kubectl update -f controllers/
kubectl update -f services/
