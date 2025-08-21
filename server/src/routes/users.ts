import express, { NextFunction, Request, Response } from 'express';
import User from '../models/user';
import passport from 'passport';

const router = express.Router();

router.get('/register', (req: Request, res: Response) => {
	res.render('auth/register');
});

router.post(
	'/register',
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			const { email, username, password } = req.body;
			const user = new User({
				email,
				username,
			});
			const registeredUser = await User.register(user, password);
			req.login(registeredUser, (err) => {
				if (err) return next(err);
				req.flash('success', 'Welcome!');
				res.redirect('/');
			});
		} catch (e: any) {
			req.flash('error', e.message);
		}
	}
);

router.get('/login', (req: Request, res: Response) => {
	res.render('auth/login');
});

router.post(
	'/login',
	passport.authenticate('local', {
		failureFlash: true,
		failureRedirect: '/auth/login',
	}),
	(req: Request, res: Response) => {
		req.flash('success', 'Welcome back!');
		res.redirect('/');
	}
);

router.get('/logout', (req: Request, res: Response, next: NextFunction) => {
	req.logout(function (err) {
		if (err) {
			return next(err);
		}
		req.flash('success', 'Goodbye!');
		res.redirect('/');
	});
});

export default router;
