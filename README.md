# App-FullStack-Template
In this directory, I document my template of starting a React app with Next.js.

## Steps:
### Step 01: Configure Next.js
	
	$ mkdir first-next
	$ cd first-next/
	$ npm init -y
	$ npm install --save react react-dom next express body-parser axios
	$ npm install @material-ui/core 
	$ npm install @material-ui/icons
	
	
	
### Step 02: Add Scripts on package.json

	{
	"name": "first-next",
	"version": "1.0.0",
	"description": "",
	"main": "index.js",
	"scripts": {
    "dev": "node server.js",
    "build": "next build",
    "start": "NODE_ENV=production node server.js"
		},
		"keywords": [],
		"author": "",
		"license": "ISC",
		"dependencies": {
    "next": "^9.4.4",
    "react": "^16.13.1",
    "react-dom": "^16.13.1"
		}
		
		
### Step 03: Create server.js

	const express = require("express");
	const bodyParser = require("body-parser");

	const next = require('next');
	const dev = process.env.NODE_ENV !== 'production';
	const app = next({ dev });
	const handle = app.getRequestHandler();
	
	app.prepare().then(() => {
		//step 1: initiate express and assign a port
		const server = express();

		//step 2: create customized route, the order is important
		// server.get("/pagesubmit", (req,res)=>{
		//   app.render(req,res,"/",{query})
		// });

		//step 3: re-create the functionality provided by next.js
		server.get("*",(req,res)=>{
			return handle(req,res);
		});
		server.listen(3000, err => {
			if (err) throw err;
			console.log("> Now serving on localhost: 3000")
		})
	});
	
	
### Step 04: Setup file structure
	- components 
		- buttons
			- Button.js
		- ...
	- contexts
	- hooks
	- pages
		- _app,.js
		- _document.js
		- index.js
		- ...
	- publics
	- util
		-validators.js
	- server.js
	
	
### Step 05: Build a REST API Backend with Node.js & Express
1. Set up Node.js + Express App
2. Add Routes
	1.Split routes and create differen middleware
	2.Handling Errors,and send back to json data at end points
	3.Adding customized Error Model instead of Error scripts.
3. Add Controller & (Dummy) Logic
4. Add User Input Validation

