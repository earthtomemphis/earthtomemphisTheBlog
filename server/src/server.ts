import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { v4 as uuid } from 'uuid';

async function start() {
	dotenv.config();
	const port = process.env.PORT || 3000;

	const app: Express = express();

	app.use(express.urlencoded({ extended: true }));
	app.use(express.json());
	app.set('view engine', 'ejs');
	app.set('views', path.join(__dirname, '/views'));

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
		res.render('home', { posts });
	});

	app.get('/posts', (req: Request, res: Response) => {
		res.render('posts/index', { posts });
	});

	app.get('/posts/:id', (req: Request, res: Response) => {
		const { id } = req.params;
		const post = posts.find((p) => p.id === id);
		res.render('posts/show', { post });
	});

	app.listen(port, () => {
		console.log(`Server is running at http://localhost:${port}`);
	});
}

start();
