import express, { NextFunction, Request, Response } from 'express';
import {
	createPost,
	deletePost,
	editPost,
	postIndex,
	renderEditPostForm,
	renderNewPostForm,
	showPost,
} from '../controllers/posts';
import { postSchema } from '../utils/errorSchema';
import ExpressError from '../utils/ExpressError';

const router = express.Router();

const validatePost = (req: Request, res: Response, next: NextFunction) => {
	const { error } = postSchema.validate(req.body);
	if (error) {
		const msg = error.details.map((el) => el.message).join(',');
		throw new ExpressError(msg, 400);
	} else next();
};

router.route('/').get(postIndex).post(validatePost, createPost);

router.get('/new', renderNewPostForm);

router.get('/:id', showPost);

router.get('/:id/edit', renderEditPostForm);

router.route('/:id').patch(editPost).delete(deletePost);

export default router;
