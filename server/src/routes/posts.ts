import express, { NextFunction, Request, Response } from 'express';
import Post from '../models/post';
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

router.get('/', async (req: Request, res: Response) => {
	const posts = await Post.find({});
	res.render('posts/index', { posts });
});

router.get('/new', (req: Request, res: Response) => {
	res.render('posts/new');
});

router.post('/', validatePost, async (req: Request, res: Response) => {
	const post = new Post(req.body.post);
	await post.save();
	res.redirect(`/posts/${post._id}`);
});

router.get('/:id', async (req: Request, res: Response) => {
	const post = await Post.findById(req.params.id);
	res.render('posts/show', { post });
});

router.get('/:id/edit', async (req: Request, res: Response) => {
	const post = await Post.findById(req.params.id);
	res.render('posts/edit', { post });
});

router.patch('/:id', async (req: Request, res: Response) => {
	const { id } = req.params;
	const post = await Post.findByIdAndUpdate(id, { ...req.body.post });
	res.redirect(`/posts/${post?._id}`);
});

router.delete('/:id', async (req: Request, res: Response) => {
	const { id } = req.params;
	const post = await Post.findByIdAndDelete(id);
	res.redirect('/posts');
});

export default router;
