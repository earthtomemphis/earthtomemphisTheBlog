'use client';
import PaginationComp from '@/app/components/PaginationComp';
import PostList from '@/app/components/PostList';
import SideMenu from '@/app/components/SideMenu';
import { useState } from 'react';

const PostListPage = () => {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<div>
			<h1 className="mb-8 text-2xl">Travel Blog</h1>
			<button
				onClick={() => setOpen((prev) => !prev)}
				className="bg-blue-800 text-sm text-white px-4 py-2 rounded-2xl mb-4 xl:hidden"
			>
				{open ? 'Close' : 'Filter or Search'}
			</button>
			<div className="flex flex-col-reverse gap-8 xl:flex-row">
				<div>
					<PostList />
				</div>
				<div className={`${open ? 'block' : 'hidden'} xl:block`}>
					<SideMenu />
				</div>
			</div>
			<PaginationComp />
		</div>
	);
};

export default PostListPage;
