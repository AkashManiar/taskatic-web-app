# taskatic-web-app
This is a Taskatic web app, it is similar to app like JIRA. This app is used to manage tasks and to track progress of team

**GitHub Link** - https://github.com/AkashManiar/taskatic-web-app
**Heroku Link** - https://taskatic-web-app-assing-2.herokuapp.com/

## Prerequisite

It needs node to be installed in to local system, which comes with built in package manager "npm", which would be further used for installing all the dependencies 

## Boilerplate modification

This project is been created with the help of existing boiler plate, create-react-app, however, structure is been modified by including separate folders for the app routes and its common components and containers

## Directory and File Structure

`src` - source folder contains all of our code

`src --> containers` - This folder contains the all the components needed for the project. Each component is having its own folder name and has `index.js` file inside each folder, so that it makes easier to import any module

`src --> common` - This folder contains all the common components used, it includes the folder for components namely `Footer` and `Logo`, which are used at different places in the project. This allows us to have the reusability of the components, which is very important part in react

`src --> assets` -  This folder contains images used for the project, my application uses the `url-loader` and `file-loader`, which directly imports the image from `assets` as the bit64 url's and allows me to import images as url's in my components file

`src --> routes` - This folder contains the `routes.js` (It contains all the routes in an array, which makes easier to add any new routes to the project) and `index.js` (It is a file which merges all the routes and adds <Route> to each of our component, I have used `react-router-dom` for my routes configurations)

`src --> App.js` - This is file where landing page code is written, so when `/`, this page is get loaded, along with its style which is in `App.css`

`src --> index.js` - This is js file for our single page `index.html`. This file merges all of our components in <App>, adds all of our react routes in <ClientRoute> and appends whole application on a single DOM element with name `root`, so powerful isn't it?

`src --> redux` - This directory is been made for the future use of project. In future I am thinking to include `redux` as a global state management tool, which would be having `actions`, `constants` and `reducers`. But for now it has no use, and also out of scope of assignment requirement. 


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.


## Design Justification

### Which color is used?

In this project for the most part **black** and **blue**, where logo is of blue blue while text and titles are of black color. However some color of the button `sign up` and `login` are kept green, blue or yellow, for making it look different than entire page and to get easily recognized by user.

### Why blue and black color are used?

Simply there are two reasons **simplicity** and **contrast** 

In whole app I have tried to maintain the same **blue**, particularly **#0275d8**, and yes i try to give customized css to maintain this color everywhere in application. Also the color of **primary** class of bootstrap is of **#0275d8**, which matches with bootstrap button color,which makes easier to integrate and also blue shows contrast with the white background, and gives better UI/UX.

Well I have made logo of our project of blue color, hence to support logo color I have kept the color of the other things like buttons on the landing page and `About Us` text on footer as blue, which makes all look synchronous with logo color. 

Also by default webpage background is white color, so I have kept the text as of black color as it makes contrast with the background color and makes easier to read the text to user due to its contrasting nature. Additionally, i have tried using different fonts weights using custom css and using different <h> tags, to emphasize different part of the web page. 

### What is special about home page?? (https://taskatic-web-app-assing-2.herokuapp.com/home)

Well homepage contains the sidebar and nav bar. Now with sidebar, I have kept off-course logo of blue color, but more important thing is I have kept sidebar options of black bold and it gets changes to white bold with blue background, which emphasizes on the option selected hovered on and gives user a clear ability and user experience to navigate to different features of the project

Navbar in home page has font color of greyish, which get darker on hovering, which again shows user which options the are going for


## Links of pages made

`Landing page` - https://taskatic-web-app-assing-2.herokuapp.com/

`Sign up page` - https://taskatic-web-app-assing-2.herokuapp.com/sign-up

`Login Page` - https://taskatic-web-app-assing-2.herokuapp.com/login

`About Us Page` - https://taskatic-web-app-assing-2.herokuapp.com/about-us

`Home page` - https://taskatic-web-app-assing-2.herokuapp.com/home


## Code References and justification

There is **no copied code** from the internet, all code is designed by myself, and with totally customized according to project and assignment requirements. However, references for using different modules used in project was seen from their official documents, whose references can be given below

## References

[1] "Getting Started – React", Reactjs.org, 2020. [Online]. Available: https://reactjs.org/docs/getting-started.html. [Accessed: 15- Jun- 2020].

[2]"reactstrap - React Bootstrap 4 components", Reactstrap.github.io, 2020. [Online]. Available: https://reactstrap.github.io/. [Accessed: 15- Jun- 2020].

[3]"react-sidebar", npm, 2020. [Online]. Available: https://www.npmjs.com/package/react-sidebar. [Accessed: 15- Jun- 2020].

[4]"react-router-dom", npm, 2020. [Online]. Available: https://www.npmjs.com/package/react-router-dom. [Accessed: 15- Jun- 2020].

[5]"Font Awesome", Fontawesome.com, 2020. [Online]. Available: https://fontawesome.com/. [Accessed: 15- Jun- 2020].

[6]"url-loader", npm, 2020. [Online]. Available: https://www.npmjs.com/package/url-loader. [Accessed: 15- Jun- 2020].

## Failed attempts

I have tried to customize the whole boiler plate initially of on my own, using **webpack-dev-sever**. But unfortunately that boilerplate could not be used for production, so I had to switch to create-react-app boiler plate and had to modify that, which works with prod. 

However you can find my attempt for customized boiler plate using **webpack** here

https://github.com/AkashManiar/Taskatic 




