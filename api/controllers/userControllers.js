const axios = require('axios');
require('dotenv').config();
const { MY_SECRET } = process.env;
const { User, Books } = require('../db');
const { Op } = require('sequelize');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const registerUser = async (req, res, next) => {
	const { email, password, username } = req.body;
	try {
		const alreadyExists = await User.findAll({ where: { email: email } });

		if (alreadyExists.length) {
			res.send('Email already registered');
			return;
		}
		let hashedPassword = crypto
			.createHash('md5')
			.update(password)
			.digest('hex');

		const newUser = await User.create({
			email: email,
			password: hashedPassword,
			username: username,
		});

		res.send('User created succesfully!');
	} catch (err) {
		next(err);
	}
};

const userLogin = async (req, res, next) => {
	const { username, password } = req.body;
	console.log(req.body);
	try {
		let hashedPassword = crypto
			.createHash('md5')
			.update(password)
			.digest('hex');
		let userCheck = await User.findOne({
			where: {
				[Op.or]: [{ username: username }, { email: username }],
			},
		});

		console.log(userCheck);
		if (!userCheck)
			return res.status(400).send('Email or password does not match!');
		else if (userCheck.password !== hashedPassword)
			return res.status(400).send('Email or password does not match!');
		else {
			const jwtToken = jwt.sign(
				{
					//token creation
					id: userCheck.id,
					email: userCheck.email,
					status: userCheck.status,
				},
				MY_SECRET,
				{ expiresIn: '12h' }
			);
			res.json({ token: jwtToken });
		}
	} catch (e) {
		next(e);
	}
};

const addFavorite = async (req, res) => {
	let { idUser, idBook } = req.body.booksFav;
	try {
		let user = await User.findByPk(idUser);

		if (user) {
			let newArray = user.favorites;
			if (!newArray.includes(idBook)) {
				newArray.push(idBook);
			} else {
				throw new Error('Invalid id');
			}

			await User.upsert({
				id: user.id,
				email: user.email,
				password: user.password,
				username: user.username,
				profile_picture: user.profile_picture,
				status: user.status,
				favorites: newArray,
			});

			res.send('Added id');
		} else {
			throw new Error('Invalid user');
		}

		res.send('Agregado a Favoritos');
	} catch (error) {
		res.status(400).json(error.message);
	}
};

const searchUserByUsername = async (req, res, next) => {
	let { username } = req.params;
	try {
		username = `%${username}%`;
		let userCheck = await User.findOne({
			where: {
				username: {
					[Op.iLike]: username,
				},
			},
		});
		if (userCheck) res.json(userCheck);
		else res.status(400).json({ message: 'User has not been found' });
	} catch (e) {
		next(e);
	}
};

const searchUserById = async (req, res, next) => {
	let { id } = req.params;
	try {
		let userCheck = await User.findByPk(id);
		if (userCheck) res.json(userCheck);
		else res.status(400).json({ message: 'User has not been found' });
	} catch (e) {
		next(e);
	}
};

const getAllUsers = async (req, res, next) => {
	try {
		let users = await User.findAll();
		if (users) res.json(users);
		else res.status(400).json({ message: 'not users found' });
	} catch (e) {
		next(e);
	}
};

const getFavorite = async (req, res) => {
	let { idUser } = req.params;

	try {
		let user = await User.findByPk(idUser);

		if (user) {
			let response = user.favorites;
			res.send(response);
		} else {
			throw new Error('Invalid user');
		}
	} catch (error) {
		res.status(400).json(error.message);
	}
};

const deleteFavorite = async (req, res) => {
	let { idUser, idBook } = req.body.booksFav;

	try {
		let user = await User.findByPk(idUser);

		if (user) {
			let newArray = user.favorites;
			if (newArray.includes(idBook)) {
				newArray = newArray.filter((e) => e !== idBook);
			} else {
				throw new Error('Invalid id');
			}

			await User.upsert({
				id: user.id,
				email: user.email,
				password: user.password,
				username: user.username,
				profile_picture: user.profile_picture,
				status: user.status,
				favorites: newArray,
			});

			res.send('Id removed');
		} else {
			throw new Error('Invalid user');
		}
	} catch (error) {
		res.status(400).json(error.message);
	}
};

module.exports = {
	registerUser,
	userLogin,
	addFavorite,
	getFavorite,
	deleteFavorite,
	searchUserByUsername,
	searchUserById,
	getAllUsers,
};
