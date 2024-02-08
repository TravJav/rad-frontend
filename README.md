# Running the FRONTEND application


## ATT as a precondition to running the app properly you need to have Docker installed on your local machine and running this is required because the backend application in the backend-app directory is a precondition to run the app and query chatgpt, there will be another README in the directory for the backend

[Start here or proceed to run without a server](./backend-app/README.md)

1. npm i within the project directory or the same level as this README
2. after the node packages have been installed run npm start
3. default port should be 3000, if you have something else running on this port you will get a prompt to run on the next available port starting from 3001 and up
4. navigate to your browser and you should be presented with the "Please Login View" you can bypass the sign in by naviagting to the /dashboard directory manually
