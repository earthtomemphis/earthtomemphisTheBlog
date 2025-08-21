import { Request, Response, NextFunction } from 'express';

declare module 'express-session' {
	interface SessionData {
		returnTo?: string; // Make it optional if it might not always exist
	}
}

export const requireLogin = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	if (!req.isAuthenticated()) {
		req.session.returnTo = req.originalUrl;
		req.flash('error', 'You must be signed in first!');
		return res.redirect('/auth/login');
	}
	next();
};

export const storeReturnTo = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	if (req.session.returnTo) {
		res.locals.returnTo = req.session.returnTo;
	}
	next();
};
