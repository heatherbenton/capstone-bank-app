// connect to mongoose package
const mongoose = require("mongoose");
// bring in config package
const config = require("config");
const db = config.get("mongoURI");

// async connection
const connectDB = async () => {
	try {
		await mongoose.connect(db, {
			useNewUrlParser: true,
			userCreateIndex: true,
		});

		console.log("MongoDB connected!");
	} catch (err) {
		console.error(err.message);
		// exit process with failure
		process.exit(1);
	}
};

module.exports = connectDB;
