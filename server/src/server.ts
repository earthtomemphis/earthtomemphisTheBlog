import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { v4 as uuid } from 'uuid';
import mongoose from 'mongoose';
// @ts-ignore
import ejsMate from 'ejs-mate';
import methodOverride from 'method-override';
import Post from './models/post';

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

	const posts = [
		{
			id: uuid(),
			title: 'Post 1',
			body: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium corporis fuga sunt. Explicabo tempore saepe beatae nulla non necessitatibus molestiae obcaecati, optio quis aspernatur exercitationem quos assumenda, incidunt ut soluta!',
		},
		{
			id: uuid(),
			title: 'Post 2',
			body: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium corporis fuga sunt. Explicabo tempore saepe beatae nulla non necessitatibus molestiae obcaecati, optio quis aspernatur exercitationem quos assumenda, incidunt ut soluta!',
		},
		{
			id: uuid(),
			title: 'Post 3',
			body: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium corporis fuga sunt. Explicabo tempore saepe beatae nulla non necessitatibus molestiae obcaecati, optio quis aspernatur exercitationem quos assumenda, incidunt ut soluta!',
		},
	];

	app.get('/', (req: Request, res: Response) => {
		res.render('home');
	});

	app.get('/posts', async (req: Request, res: Response) => {
		const posts = await Post.find({});
		res.render('posts/index', { posts });
	});

	app.get('/posts/new', (req: Request, res: Response) => {
		res.render('posts/new');
	});

	app.post('/posts', async (req: Request, res: Response) => {
		const post = new Post(req.body.post);
		await post.save();
		res.redirect(`/posts/${post._id}`);
	});

	app.get('/posts/:id', async (req: Request, res: Response) => {
		const post = await Post.findById(req.params.id);
		res.render('posts/show', { post });
	});

	app.get('/posts/:id/edit', async (req: Request, res: Response) => {
		const post = await Post.findById(req.params.id);
		res.render('posts/edit', { post });
	});

	app.patch('/posts/:id', async (req: Request, res: Response) => {
		const { id } = req.params;
		const post = await Post.findByIdAndUpdate(id, { ...req.body.post });
		res.redirect(`/posts/${post?._id}`);
	});

	app.delete('/posts/:id', async (req: Request, res: Response) => {
		const { id } = req.params;
		const post = await Post.findByIdAndDelete(id);
		res.redirect('/posts');
	});

	app.listen(port, () => {
		console.log(`Server is running at http://localhost:${port}`);
	});
}

start();
