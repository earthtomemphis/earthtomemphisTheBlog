import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';

async function start() {
	dotenv.config();
	const port = process.env.PORT || 3000;

	const app: Express = express();

	app.use(express.urlencoded({ extended: true }));
	app.use(express.json());
	app.set('view engine', 'ejs');
	app.set('views', path.join(__dirname, '/views'));

	app.get('/', (req: Request, res: Response) => {
		res.render('home');
	});

	app.listen(port, () => {
		console.log(`Server is running at http://localhost:${port}`);
	});
}

start();
