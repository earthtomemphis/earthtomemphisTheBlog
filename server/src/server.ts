import express, { Express, NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import mongoose from 'mongoose';
// @ts-ignore
import ejsMate from 'ejs-mate';
import methodOverride from 'method-override';
import cors from 'cors';
import flash from 'connect-flash';
import session from 'express-session';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import User from './models/user';
import posts from './routes/posts';
import youtube from './routes/youtube';
import users from './routes/users';
import ExpressError from './utils/ExpressError';
import { requireLogin } from './utils/middleware';

declare module 'express-session' {
	interface SessionData {
		user_id?: string; // Or the appropriate type for user_id
		// Add other custom properties here
	}
}

async function start() {
	dotenv.config();
	const port = process.env.PORT || 3000;

	const app: Express = express();

	mongoose.connect('mongodb://127.0.0.1:27017/earthtomemphis');

	const db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', () => {
		console.log('Database connected');
	});

	app.engine('ejs', ejsMate);
	app.set('view engine', 'ejs');
	app.set('views', path.join(__dirname, '/views'));
	app.use(express.urlencoded({ extended: true }));
	app.use(express.json());
	app.use(methodOverride('_method'));
	app.use(
		cors({
			origin: 'http://localhost:5173',
		})
	);

	const sessionConfig = {
		secret: 'thisshouldbeabettersecret!',
		resave: false,
		saveUninitialized: true,
		cookie: {
			httpOnly: true,
			// expires: Date.now() * 1000 * 60 * 60 * 24 * 7,
			// maxAge: 1000 * 60 * 60 * 24 * 7,
		},
	};

	app.use(session(sessionConfig));
	app.use(flash());

	app.use(passport.initialize());
	app.use(passport.session());
	passport.use(new LocalStrategy(User.authenticate()));

	passport.serializeUser(User.serializeUser());
	passport.deserializeUser(User.deserializeUser());

	app.use((req: Request, res: Response, next: NextFunction) => {
		res.locals.currentUser = req.user;
		res.locals.success = req.flash('success');
		res.locals.error = req.flash('error');
		next();
	});

	// require login

	app.get('/api/message', async (req: Request, res: Response) => {
		// const posts = await Post.find({});
		// const youtubeLinks = await YouTube.find({});
		// res.render('home', { posts, youtubeLinks });
		res.json({
			msg: 'Hello from the server',
		});
	});

	app.use('/api/posts', posts);
	app.use('/api/youtube', youtube);
	app.use('/api/auth', users);

	app.get('/secret', requireLogin, (req: Request, res: Response) => {
		res.render('secret');
	});

	app.all(/(.*)/, (req: Request, res: Response, next: NextFunction) => {
		next(new ExpressError('Page Not Found', 404));
	});

	app.use(
		(
			err: ExpressError,
			req: Request,
			res: Response,
			next: NextFunction
		) => {
			const { statusCode = 500 } = err;
			if (!err.message) err.message = 'Oh No, Something went wrong';
			res.status(statusCode).render('error', { err });
		}
	);

	app.listen(port, () => {
		console.log(`Server is running at http://localhost:${port}`);
	});
}

start();
