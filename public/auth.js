const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const auth = require("../../pause/fullmernstack/middleware/auth");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, valindationResult } = require("express-validator/check");

const User = require("../../models/User");

// @route        GET api/auth
// @description  Test route with callback arrow function
// @access       Public, do not need token
router.get("/", auth, async (req, res) => {
	try {
		const user = await User.findById(req.user.id).select("-password");
		res.json(user);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("server error");
	}
});

// @route        POST api/auth
// @description  Authenticate user and get token
// @access       Public

router.post(
	"/",
	[
		check("email", "please use valid email").isEmail(),
		check("password", "password is required").exists(),
	],

	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: erros.array() });
		}

		const { email, password } = req.body;

		try {
			let user = await User.findOne({ email });
			// see if user exists and catch error if they don't
			if (!user) {
				return res
					.status(400)
					.json({ errors: [{ msg: "Invalid credentials!" }] });
			}

			// check if password matches, keep same message for security so it does not show if a user account exists
			const isMatch = await bcrypt.compare(password, user.password);

			if (!isMatch) {
				return res
					.status(400)
					.json({ errors: [{ msg: "Invalid credentials!" }] });
			}

			// keep payload
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
