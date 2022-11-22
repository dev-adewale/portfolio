---
title: "Build a RestFul API With Node.js, Express & MongoDB"
path: /rest-api-with-mongodb
date: 09 Nov 2022
tags: ["backend", "api"]
---

In this detailed tutorial, we will be building a Rest API with **Node.js**, **Express** and **MongoDB** non-relational database. This API will expose endpoints that will allow for **CRUD** (Create, Read, Update, Delete) operations.

<br>

### #Prerequisites

<br>

To follow along with the tutorial, you'll need to have the following specified tools installed 👇:

<br>

* [Node](nodejs.org)
* MongoDB Compass
* A text/code editor of your choice
* A terminal

<br>

Also make sure you've mastered fundamentals of the following in order to sail through smoothly:

<br>

* Node
* JavaScript
* MongoDB
* APIs

<br>

### #To-do lists

<br>

What we are going to build is a Rest API where user details can be stored. Information such as **Email**, **Name**, & **Phone number** will be stored with each individual user. Since this is a CRUD API, 4 types of endpoint need to be exposed.

<br>

First, we will create our **GET** endpoint that will list all user details in our MongoDB database:

<br>

```bash
GET /get
```
<br>

We will be starting with an empty database. So, we need to create a **POST** endpoint that will allow us to add user details:

<br>

```bash
POST /add
```
<br>

The third endpoint will be the **PATCH** method, this will allow us to update users information when we need to:

<br>

```bash
PATCH /update
````
<br>

Finally, we have to create a **DELETE** endpoint incase we have to delete every information about a user:

<br>

```bash
DELETE /remove
```
<br>

By making these 4 endpoints, we will achieve our aim to create a CRUD API. Without wasting time further, open up any **terminal** of choice, I will be using **Git bash** terminal.

<br>

### #Creating our project

<br>

We will kick off by making a folder called **userApp** for our project. Afterwards, initialize a **package.json** file in the root by typing the **npm init -y** command.

<br>

```bash

Dev.Adewale ~/documents $ mkdir userApp

Dev.Adewale ~/documents $ cd userApp

Dev.Adewale ~/documents/userApp $ npm init -y
Wrote to C:\Users\Adeyemi\documents\userApp\package.json:

{
  "name": "userapp",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

```
<br>

After project initialization, we'll have to install all dependencies that will make it somewhat easy for us to build our API and it's **CRUD** endpoints. So, open your terminal again and install 👇:

<br>

```bash
npm i express mongoose --save
```
<br>

We have to install one more package, but to our **devDependencies** this time around:

<br>

```bash
npm i nodemon --save-dev
```
<br>

Here's a breakdown of what we installed 🕵️‍♂️:

<br>

### #Express

<br>

Express is a fast, minimal and flexible **Node** web application framework. It comes with robust set of features that will allow us spin up our API **Server** without much complexity.

<br>

### #Mongoose

<br>

We installed the **mongoose** package instead of **mongodb** earlier, wondering why? It's because Mongoose is a wrapper package that provides more advanced features than using the MongoDB package.

<br>

Mongoose is an Object Data Modeling (ODM) library that manages relationships between data, provides schema validation, and is used to create a connection between MongoDB and the Node.js runtime environment.<br></br>

### #Nodemon

<br>

While installing our dependencies, **nodemon** was installed to the **devDependencies** section. Why? We really don't need this package in production, it's only useful while developing locally. Nodemon is a Node app wrapper that will watch for any file changes in our project and automatically restart our server.

<br>

Without it, we will have to restart the server manually everytime we make changes to any file in our project folder. Yikes 😖, that will be stressful!

<br>

Now, let's get our hands dirty with code...

<br>

### #Start coding

<br>

Create a **server.js** file in the project root folder. You can name the JS file anything, it doesn't matter. This will be the entry point to our app. To start coding, open the **package.json** file and edit it like so 👇:

<br>

```json
{
  "name": "userapp",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "nodemon server.js"
  },
  "keywords": [],
   "type": "module",
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^6.7.2"
  },
  "devDependencies": {
    "nodemon": "^2.0.20"
  }
}
```
<br>

What changed? If you noticed, we add a new text **"type": "module"**. This is notify the package file that we will be using **ES6** syntax whenever we're importing a package in our code.

<br>

We also added a script of **"dev": "nodemon server.js"**. This will spin up our server, watch for file changes and automatically restart the server for us.

<br>

In **server.js**, write the following code:

<br>

```javascript
/* Import express */
import express from "express";

/* Initialize express import */
const app = express()

/* Listen to server on a port */
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`it's alive on http://localhost:${PORT}`);
})
```
<br>

We imported the **express** package, stored and intialized it in a variable. The **app** variable will now give us access to all **express** has to offer. At the end of the code, we started listening to our server on a port. Now open your terminal again and run **npm run dev**, the name of the script we created in the **package.json** file. You should get the output below 👇:

<br>

```javascript
Dev.Adewale ~/mongodb $ npm run dev

> userapp@1.0.0 dev
> nodemon server.js

[nodemon] 2.0.20
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json  
[nodemon] starting `node server.js`
it's alive on http://localhost:3000
```

<br>

Now that our server is up and running, let's connect to our MongoDB database. But first, open up **MongoDB Compass** and grab your local database installation **URI**. Then, create a **db.js** file in the project root folder and make the following changes 👇:

<br>

```javascript
/* Import mongoose */
import mongoose from "mongoose";

/* Store local MongoDB uri ending with your database name */
const uri = "mongodb://localhost:27017/UserDB" /* <- Database name */

/* Connect to DB */
mongoose.connect(uri, {
    useNewUrlParser: true
})

/* Store connection instance */
const db = mongoose.connection

/* Callback function to let us know when we're connected */
db.once("open", () => {
    console.log("Connected to MongoDB!");
})

/* Export the store connection instance */
export default db
```

<br>

Now navigate back to the **server.js** file and import the **db.js** file at the top-level:

<br>

```javascript
/* Import database connection to MongoDB */
import db from "./db.js";
```

<br>

Afterwards, you should see some additional changes in the terminal output like below 👇:

<br>

```bash
Dev.Adewale ~/mongodb $ npm run dev

> userapp@1.0.0 dev
> nodemon server.js

[nodemon] 2.0.20
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json  
[nodemon] starting `node server.js`
it's alive on http://localhost:3000
Connected to MongoDB!
```

<br>

Next, we will be creating a model that will enforce the structure of user's data that will be stored in our database. Create a **model** folder in the project root folder and also create a **User.js** file inside it. Let's make some changes 👇:

<br>

```javascript
/* Import mongoose */
import mongoose from "mongoose";

/* Create a schema */
const userSchema = new mongoose.Schema({
  
    email: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    phoneNumber: {
        type: Number,
        required: true
    }

})

/* Export the model */
export default mongoose.model("Users", userSchema)
```

<br>

We also have to setup routes handler that will respond to our endpoints. First create a **routes** folder containing **router.js** file. Make changes to the **router.js** file like so 👇:

<br>

```javascript
/* Import express */
import express from 'express'

/* Init express Router */
const Router = express.Router()

/* Export the Router variable */
export default Router
```

<br> 

In the **server.js** file, we have to create a **middleware** that will intercept every request we're getting and redirect them to the **router.js** file where they will be handled 👇:

<br>

```javascript
/* Import express */
import express from "express";

/* Import database connection to MongoDB */
import db from "./db.js";

/* Import Router */
import Router from "./routes/router.js";

/* Init express instance */
const app = express()

/* MIDDLEWARE STARTS */

/* Redirect requests to Router */
app.use('/', Router)

/* MIDDLEWARE ENDS */

/* Listening to port */
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`it's alive on http://localhost:${PORT}`);
})
```

<br>

We can now proceed to setup every endpoints in the **router.js** file. The first endpoint is the **GET** method, import the **model** created earlier in the router file. Then it can be used to communicate with our MongoDB database 👇:

<br>

```javascript
/* Import mongoose schema */
import User from '../model/User.js'

/* Get all method */
Router.get('/get', async (req, res) => {

    const get = await User.find()
    res.send(get)
})
```

<br>

Now find an **API client** to test our first endpoint, I recommend **Postman** or **Insomnia** if you prefer a desktop client. Paste in the **localhost** URL followed by the corresponding **endpoint**. It should look like so 👉: **http://localhost:3000/get**.

<br>

Note that you're going to get an empty response for now because we have nothing in our database. Next, we're going to create a **POST** endpoint and fill our database with some documents.

<br>

Navigate back to **router.js** and setup the **POST** endpoint 👇:

<br>

```javascript
/* Post method */
Router.post('/add', async (req, res) => {

    const addUser = new User({
        email: req.body.email,
        name: req.body.name,
        phoneNumber: req.body.phoneNumber
    })

    await addUser.save()
    res.send(addUser)
})
```

<br>

To test our post endpoint, open up any API client you're using and send a POST request. Check your **MongoDB Compass** afterwards and you should see a new **Database name** with a **Collection** containing the **data** you just sent.

<br>

The **POST** endpoint is up, what if we have to delete a user data? Let's continue by creating a **DELETE** endpoint in the **router.js** file 👇:

<br>

```javascript
/* Delete method */
Router.delete('/remove/:id', async (req, res) => {
    
    const remove = await User.deleteOne({_id: req.params.id})
    res.send(remove)
})
```

<br>

The last endpoint we will be creating is the **PATCH** method, this will allow us to edit and update existing users data store in our database. Navigate back to the **router.js** file and make new changes 👇:

<br>


```javascript
/* Patch method */
Router.patch('/update/:id', async (req, res) => {
    
    const update = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.send(update)
})
```

<br>

Make sure to test if all endpoints is functional and working as expected in any API client of your choice. If you have any questions or you're getting an error, be sure to comment. I will try to give a valid response as soon as I can. Bye for now 🙋‍♂️!