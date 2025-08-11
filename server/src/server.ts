import express, { Express, NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import mongoose from 'mongoose';
// @ts-ignore
import ejsMate from 'ejs-mate';
import methodOverride from 'method-override';
import Post from './models/post';
import YouTube from './models/youtube';
import posts from './routes/posts';
import youtube from './routes/youtube';
import ExpressError from './utils/ExpressError';
import catchAsync from './utils/catchAsync';
import { postSchema } from './utils/errorSchema';

async function start() {
	dotenv.config();
	const port = process.env.PORT || 3000;

	const app: Express = express();

	app.engine('ejs', ejsMate);
	app.set('view engine', 'ejs');
	app.set('views', path.join(__dirname, '/views'));
	app.use(express.urlencoded({ extended: true }));
	app.use(express.json());
	app.use(methodOverride('_method'));

	mongoose.connect('mongodb://127.0.0.1:27017/earthtomemphis');

	const db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', () => {
		console.log('Database connected');
	});

	app.get('/', async (req: Request, res: Response) => {
		const posts = await Post.find({});
		const youtubeLinks = await YouTube.find({});
		res.render('home', { posts, youtubeLinks });
	});

	app.use('/posts', posts);
	app.use('/youtube', youtube);

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
