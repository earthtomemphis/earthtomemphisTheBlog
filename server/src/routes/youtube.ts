import express, { NextFunction, Request, Response } from 'express';
import YouTube from '../models/youtube';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
	const youtubeLinks = await YouTube.find({});
	res.render('youtube/index', { youtubeLinks });
});

router.get('/new', (req: Request, res: Response) => {
	res.render('youtube/new');
});

router.post('/', async (req: Request, res: Response) => {
	const youtubeLink = new YouTube(req.body.youtube);
	await youtubeLink.save();
	res.redirect(`/youtube/${youtubeLink._id}`);
});

router.get('/:id', async (req: Request, res: Response) => {
	const youtubeLink = await YouTube.findById(req.params.id);
	res.render('youtube/show', { youtubeLink });
});

router.get('/:id/edit', async (req: Request, res: Response) => {
	const youtubeLink = await YouTube.findById(req.params.id);
	res.render('youtube/edit', { youtubeLink });
});

router.patch('/:id', async (req: Request, res: Response) => {
	const { id } = req.params;
	const youtubeLink = await YouTube.findByIdAndUpdate(id, {
		...req.body.youtube,
	});
	res.redirect(`/youtube/${youtubeLink?._id}`);
});

router.delete('/:id', async (req: Request, res: Response) => {
	const { id } = req.params;
	const youtube = await YouTube.findByIdAndDelete(id);
	res.redirect('/youtube');
});

export default router;
