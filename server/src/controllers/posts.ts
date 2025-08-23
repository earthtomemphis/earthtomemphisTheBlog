import { Request, Response } from 'express';
import Post from '../models/post';

export const postIndex = async (req: Request, res: Response) => {
	const posts = await Post.find({});
	res.render('posts/index', { posts });
};

export const renderNewPostForm = (req: Request, res: Response) => {
	res.render('posts/new');
};

export const createPost = async (req: Request, res: Response) => {
	const post = new Post(req.body.post);
	await post.save();
	res.redirect(`/posts/${post._id}`);
};

export const showPost = async (req: Request, res: Response) => {
	const post = await Post.findById(req.params.id);
	res.render('posts/show', { post });
};

export const renderEditPostForm = async (req: Request, res: Response) => {
	const post = await Post.findById(req.params.id);
	res.render('posts/edit', { post });
};

export const editPost = async (req: Request, res: Response) => {
	const { id } = req.params;
	const post = await Post.findByIdAndUpdate(id, { ...req.body.post });
	res.redirect(`/posts/${post?._id}`);
};

export const deletePost = async (req: Request, res: Response) => {
	const { id } = req.params;
	const post = await Post.findByIdAndDelete(id);
	res.redirect('/posts');
};
