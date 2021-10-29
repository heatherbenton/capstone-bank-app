const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, valindationResult } = require("express-validator/check");

const User = require("../../models/User");

// @route        POST api/users
// @description  Register user
// @access       Public, do not need token
// parameters for name, email, and password
router.post(
	"/",
	[
		check("name", "name is required").not().isEmpty(),
		check("email", "please use valid email").isEmail(),
		check(
			"password",
			"please enter password with 6 or more characters"
		).isLength({ min: 6 }),
	],

	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: erros.array() });
		}

		const { name, email, password } = req.body;

		try {
			// see if user exists
			let user = await User.findOne({ email });

			if (user) {
				return res
					.status(400)
					.json({ errors: [{ msg: "User already exists!" }] });
			}

			user = new User({
				name,
				email,
				password,
			});

			// encrypt password
			const salt = await bcrypt.genSalt(10);

			user.password = await bcrypt.hash(password, salt);

			await user.save();

			// create json web token payload with mongoose id

			const payload = {
				user: {
					id: user.id,
				},
			};

			jwt.sign(
				payload,
				// pass in secret token
				config.get("jwtSecret"),
				// expires after one hour
				{ expiresIn: 3600 },
				// callback with either error or token
				(err, token) => {
					if (err) throw err;
					res.json({ token });
				}
			);
		} catch (err) {
			console.error(err.message);
			res.status(500).send("server error");
		}
	}
);

module.exports = router;
