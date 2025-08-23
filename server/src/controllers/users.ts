import express, { NextFunction, Request, Response } from 'express';
import User from '../models/user';

export const renderRegisterForm = (req: Request, res: Response) => {
	res.render('auth/register');
};

export const register = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
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
};

export const renderLoginForm = (req: Request, res: Response) => {
	res.render('auth/login');
};

export const login = (req: Request, res: Response) => {
	req.flash('success', 'Welcome back!');
	const redirectUrl = res.locals.returnTo || '/';
	res.redirect(redirectUrl);
};

export const logout = (req: Request, res: Response, next: NextFunction) => {
	req.logout(function (err) {
		if (err) {
			return next(err);
		}
		req.flash('success', 'Goodbye!');
		res.redirect('/');
	});
};
