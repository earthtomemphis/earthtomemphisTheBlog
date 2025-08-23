import express from 'express';
import passport from 'passport';
import { storeReturnTo } from '../utils/middleware';
import {
	login,
	logout,
	register,
	renderLoginForm,
	renderRegisterForm,
} from '../controllers/users';

const router = express.Router();

router.route('/register').get(renderRegisterForm).post(register);

router
	.route('/login')
	.get(renderLoginForm)
	.post(
		storeReturnTo,
		passport.authenticate('local', {
			failureFlash: true,
			failureRedirect: '/auth/login',
		}),
		login
	);

router.get('/logout', logout);

export default router;
