//install express
const express = require("express");
const app = express();

const path = require("path");
const mongoose = require("mongoose");

//connect Mongo to config file
const connectDB = require("./config/db");

// connect to mongo database (not sure if I need this twice?)
connectDB();

mongoose.connect(process.env.MONGO_URI, {
	useCreateIndex: true,
	useNewUriParser: true,
	useFindAndModify: false,
	useUnifiedTopology: true,
});

// init middleware (do I have things in the correct order in this file???)
app.use(express.json({ extended: false }));

require("dotenv").config();
var cors = require("cors");
var dal = require("./dal.js");
const e = require("express");

const fetch = require("node-fetch"); // import node-fetch (enables the fetch API to be used server-side)

const PORT = process.env.PORT || 5000; // use either the host env var port (PORT) provided by Heroku or the local port (5000) on your machine

app.listen(PORT, () =>
	console.log("server is actually running, if you can believe it")
);

// used to serve static files from public directory
app.use(express.static("public"));
app.use(cors());

// create user account
app.get("/account/create/:name/:email/:password", function (req, res) {
	// check if account exists
	dal.find(req.params.email).then((users) => {
		// if user exists, return error message
		if (users.length > 0) {
			console.log("User already in exists");
			res.send("User already in exists");
		} else {
			// else create user
			dal
				.create(req.params.name, req.params.email, req.params.password)
				.then((user) => {
					console.log(user);
					res.send(user);
				});
		}
	});
});

// login user
app.get("/account/login/:email/:password", function (req, res) {
	dal.find(req.params.email).then((user) => {
		// if user exists, check password
		if (user.length > 0) {
			if (user[0].password === req.params.password) {
				res.send(user[0]);
			} else {
				res.send("invalid credentials");
			}
		} else {
			res.send("Login failed: user not found");
		}
	});
});

// find user account
app.get("/account/find/:email", function (req, res) {
	dal.find(req.params.email).then((user) => {
		console.log(user);
		res.send(user);
	});
});

// find one user by email - alternative to find
app.get("/account/findOne/:email", function (req, res) {
	dal.findOne(req.params.email).then((user) => {
		console.log(user);
		res.send(user);
	});
});

// update - deposit/withdraw amount
app.get("/account/update/:email/:amount", function (req, res) {
	var amount = Number(req.params.amount);

	dal.update(req.params.email, amount).then((response) => {
		console.log(response);
		res.send(response);
	});
});

// all accounts
app.get("/account/all", function (req, res) {
	dal.all().then((docs) => {
		console.log(docs);
		res.send(docs);
	});
});

// serve build to deploy to Heroku
if (process.env.NODE_ENV === "production") {
	app.use(express.static("public"));
	// getting path to deploy Heroku
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "public", "index.html"));
	});
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server stared on port ${PORT}`));
