import { Request, Response } from 'express';
import YouTube from '../models/youtube';

export const youtubeIndex = async (req: Request, res: Response) => {
	const youtubeLinks = await YouTube.find({});
	// console.log(youtubeLinks);
	res.json({
		youtubeLinks,
	});
};

export const renderNewYouTubeForm = (req: Request, res: Response) => {
	res.render('youtube/new');
};

export const createYoutubeVideo = async (req: Request, res: Response) => {
	const youtubeLink = new YouTube(req.body.youtube);
	await youtubeLink.save();
	res.redirect(`/youtube/${youtubeLink._id}`);
};

export const showYoutubeVideo = async (req: Request, res: Response) => {
	const youtubeLink = await YouTube.findById(req.params.id);
	res.render('youtube/show', { youtubeLink });
};

export const renderEditYoutubeVideoForm = async (
	req: Request,
	res: Response
) => {
	const youtubeLink = await YouTube.findById(req.params.id);
	res.render('youtube/edit', { youtubeLink });
};

export const editYoutubeVideo = async (req: Request, res: Response) => {
	const { id } = req.params;
	const youtubeLink = await YouTube.findByIdAndUpdate(id, {
		...req.body.youtube,
	});
	res.redirect(`/youtube/${youtubeLink?._id}`);
};

export const deleteYoutubeVideo = async (req: Request, res: Response) => {
	const { id } = req.params;
	const youtube = await YouTube.findByIdAndDelete(id);
	res.redirect('/youtube');
};
