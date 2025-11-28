import express from 'express';
import {
	createYoutubeVideo,
	deleteYoutubeVideo,
	editYoutubeVideo,
	renderEditYoutubeVideoForm,
	renderNewYouTubeForm,
	showYoutubeVideo,
	youtubeIndex,
} from '../controllers/youtubes';

const router = express.Router();

router.route('/').get(youtubeIndex).post(createYoutubeVideo);

router.get('/new', renderNewYouTubeForm);

router
	.route('/:id')
	.get(showYoutubeVideo)
	.patch(editYoutubeVideo)
	.delete(deleteYoutubeVideo);

router.get('/:id/edit', renderEditYoutubeVideoForm);

export default router;
