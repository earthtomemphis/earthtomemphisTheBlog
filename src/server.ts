import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

async function start() {
	dotenv.config();
	const port = process.env.PORT || 3000;

	const app: Express = express();

	app.use(express.urlencoded({ extended: true }));
	app.use(express.json());

	app.get('/', (req: Request, res: Response) => {
		res.send('Hello World');
	});

	app.listen(port, () => {
		console.log(`Server is running at http://localhost:${port}`);
	});
}

start();
