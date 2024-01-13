#!/bin/bash

export AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID # your access key id for your dm user account
export AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY # your secret access key for your dm user account
export AWS_DEFAULT_REGION=$AWS_DEFAULT_REGION # your default region for your dm user account
# Build backend container
DOCKER_BUILDKIT=1 docker build -t api-data-science:latest -f ./Dockerfile .
