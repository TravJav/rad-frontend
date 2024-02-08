#!/bin/bash

# Set AWS credentials and default region
export AWS_ACCESS_KEY_ID="$AWS_ACCESS_KEY_ID"         # Your AWS access key ID
export AWS_SECRET_ACCESS_KEY="$AWS_SECRET_ACCESS_KEY" # Your AWS secret access key
export AWS_DEFAULT_REGION="$AWS_DEFAULT_REGION"         # Your AWS default region

# Build backend container
DOCKER_BUILDKIT=1 docker build -t api-radpair:latest -f ./Dockerfile .

# Check if the Docker build was successful, and the image is available
if docker image inspect api-radpair:latest &> /dev/null; then
    echo "Docker build successful. Image api-radpair:latest is available."
else
    echo "Docker build failed or image not found. Check the build logs for details."
    exit 1
fi
