# Running the FRONTEND application



## backend app can be found here: https://github.com/TravJav/rad-backend


## ATT as a precondition to running the app properly you need to have Docker installed on your local machine and running this is required because the backend application in the backend-app directory is a precondition to run the app and query chatgpt, there will be another README in the directory for the backend

[Start here or proceed to run without a server](./https://github.com/TravJav/rad-backend/blob/main/README.md)

1. npm i within the project directory or the same level as this README, please do not commit the node_modules the .gitignore should do it's job.
2. after the node packages have been installed run npm start
3. default port should be 3000, if you have something else running on this port you will get a prompt to run on the next available port starting from 3001 and up
4. navigate to your browser and you should be presented with the "Please Login View" you can bypass the sign in by naviagting to the /dashboard directory manually



# Application shots

ATT: all assets in the asset folder are legal resources for me to use like the logo which I built with a software service as well as the body_map image which I purchased on Shuttershock.

## Login Page

I created the login page because to access a service like this you would need to login first before using any functionality, I could have just created a single component but it wouldn't have felt right to me so I took a more hollistic assumption and kind of treated this as a full stack application to make it more realistic but give a better in depth indiciation of what would be involved in an application like this if we were actually deploying this.

![Alt text](./src/assets/login_snap.png "Login")


## Dashboard

The Dashboard was created as the primary view you I added a unique image that I bought from Shuttershock to highlight the unique domain in this case which is Radiology. The image below is pre-query of the backend call we make.

![Alt text](./src/assets/dashboard_empty.png "Pre Question")

## Dashboard After Query

Again we have the Dashboard view but this time we see a few different things and that is we see the query has taken place and we have a chat gpt response now! I borrowed the normalized chat bubbles we're all use to along with a small icon that indicates there is some kind of medical assistant who replied.


![Alt text](./src/assets/after_question.png "Post Question")

## Dashboard Drawer

What's this for? the idea although not hooked up to other actions would allow the user to look through different reports the way I would see this app is the Dashboard page would be one of many potentially in this app, I beleive the side drawer should be present in all Authenticated views to allow the user minimal hoop-jumping to access reports, provider(s) ( insurance ) lookups and other medical information pertaining to the domain that we'd be working in. I also on the main header added a dark theme to give the user more control over their enviornment, I would capture any user settings or defaults using a DB for example dark_theme=True in a column in a table called user_settings



![Alt text](./src/assets/side_drawer.png "Drawer on Dashboard")

## Not Found

I added the 404 page here to highlight realism in the sense that how would we handle a user navigating to the wrong route? well with this ofcourse!

![Alt text](./src/assets/not_found.png "Post Question")


# If I had more time

## Paths
 components and assets, there is a easier way and that to define them in the file where we can define the source paths along with other files like the pages to save guessing paths when our application gets very big



## Linter
If I had more time for this application I would activate the linter to enforce more congruency, the only reason why I did not here is because it would have took a large chunk of my time probably an hour to work through them all. To enforce the linter just remove the prefix to .eslintrc.js and you can run the linter through the npm script


## Typescript

Potentially coverting the project to typescript I used only jsx file types or js because for this exercise it was not required and maintaing all the tsx files with the correxct types in MVP stage can be a real slow down


## Proper mock ups

I would have created Figma wireframes importing material so I can create concrete designs and share them


## Adding Axios Context

Adding real authentication would have been real nice, I was aiming for this but ran short on time I would really like to add JWT support on this, my intention was to launch the backend service to railway app or AWS app runner like I have in my other application:  https://cxmape9yrk.us-east-1.awsapprunner.com/status running short on time I the developer would have to dockerize the backend to run this.


## Adding more endpoints

    There is some functionality that is not complete but given this is a MVP I need to ship what's important and come back to the other things that are less important in the feature or deployment, adding routes for forgot password, user sign up and many other things.


## Taking a step back

If given more time I would like to take a step back and think about this a bit more, understand the context better
the user requirements? what does our user need from this dashboard? what types of actions would they want available from the immediate side drawer, should we save the chat history? should we enable speech dictation for users that have issues typing or read the chatgpt responses outloud? these are all things we have to ask ourselves when creating a professional application


## Error Handling
 Error handling on the frontend with javascript is kind of different, we can console log it, alert it or present a nice message to the user. I am using Material UI alerts to message the user about any success or errors to always keep the user informed.


# Design patterns

With this application it's fairly simple I am not using any special design pattern here other than the React library and utilizing states and prop in the proper way along with the lifecycle hooks in the clas component and functional based component. I like to use functional based components when the component is small or not too smart like the Header, it doesnt really do too much and the the state it uses is easy to follow, when things grow I have a bias to go back to classes since I find it a bit easier to organize abstraction and I like everything encapsulated as I find it easier to follow and jump through but this is subjective but I find state is easier to understand or keep track of as well, using the hooks in the functional based component can get messy along with the lifecycle hooks too.

# Thinking ahead
Extras, I attempted to add in things that would be there if this were a real project thinking ahead like circleci config and pull request template