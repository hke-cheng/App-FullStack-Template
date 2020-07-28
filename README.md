# App-FullStack-Template
In this directory, I document my template of starting a React app with Next.js.

## Steps:
### Step 01: Configure Next.js
	
	$ mkdir first-next
	$ cd first-next/
	$ npm init -y
	$ npm install --save react react-dom next express axios
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

	app.prepare().then(() => {

		//step 1: initiate express and assign a port
		const server = express();

		//step 3: create customized route, the order is important
		// server.get("/pagesubmit", (req,res)=>{
		//   app.render(req,res,"/",{query})
		// });

		//step 2: re-create the functionality provided by next.js
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
	
