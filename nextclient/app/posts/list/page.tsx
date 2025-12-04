import PaginationComp from '@/app/components/PaginationComp';
import PostList from '@/app/components/PostList';
import SideMenu from '@/app/components/SideMenu';

const PostListPage = () => {
	return (
		<div>
			<h1 className="mb-8 text-2xl">Travel Blog</h1>
			<button className="bg-blue-800 text-sm text-white px-4 py-2 rounded-2xl mb-4 md:hidden">
				Filter or Search
			</button>
			<div className="flex flex-col-reverse gap-8 lg:flex-row">
				<div>
					<PostList />
				</div>
				<div>
					<SideMenu />
				</div>
			</div>
			<PaginationComp />
		</div>
	);
};

export default PostListPage;
