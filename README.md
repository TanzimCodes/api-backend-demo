# api-backend-demo
This project is for deploying a sample backend node project on kubernetics to show it's advantages. For the following to run on your locla machine you must have


# Prerequisites
- Docker installed on your machine - https://www.docker.com/products/docker-desktop/ 
- kubectl (usually comes with docker desktop) - https://kubernetes.io/docs/reference/kubectl/
- Minikube - https://minikube.sigs.k8s.io/docs/start/ 

# Getting started
Open your termial and let's get started

First, you will need to start Minikube by using the command
- minikube start

Next, you will need to build the docker image push it directly to the minikube in-cluster Docker daemon.
To do so follow this guideline - https://minikube.sigs.k8s.io/docs/handbook/pushing/

Next Apply Kubernetes Manifests by running this:
- kubectl apply -f api-backend.yaml

Next, tunnel the cluster :
- minikube service my-api-backend-service

It should be done, now you will be able to see your application running. If you want to see real time analytics and using dashbaord use this link below
- https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/
