import Link from 'next/link';
import Search from './Search';

const SideMenu = () => {
	return (
		<div className="px-4 h-max sticky top-8">
			<h1 className="mb-4 text-sm font-medium">Search</h1>
			<Search />
			<h1 className="mt-8 mb-4 text-sm font-medium">Filter</h1>
			<div className="flex flex-col gap-2 text-sm">
				<label
					htmlFor=""
					className="flex items-center gap-2 cursor-pointer"
				>
					<input
						type="radio"
						name="sort"
						className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800"
						id=""
					/>
					Newest
				</label>
				{/* <label
					htmlFor=""
					className="flex items-center gap-2 cursor-pointer"
				>
					<input
						type="radio"
						name="sort"
						className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800"
						id=""
					/>
					Most popular
				</label> */}
				<label
					htmlFor=""
					className="flex items-center gap-2 cursor-pointer"
				>
					<input
						type="radio"
						name="sort"
						className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800"
						id=""
					/>
					Trending
				</label>
				<label
					htmlFor=""
					className="flex items-center gap-2 cursor-pointer"
				>
					<input
						type="radio"
						name="sort"
						className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800"
						id=""
					/>
					Oldest
				</label>
			</div>
			<h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
			<div className="flex flex-col gap-2 text-sm">
				<Link className="underline" href="/posts/list">
					All
				</Link>
				<Link className="underline" href="/posts?cat=travel-tips">
					Travel Tips
				</Link>
				<Link className="underline" href="/posts?cat=travel-stories">
					Travel Stories
				</Link>
				<Link className="underline" href="/posts?cat=budget-traveling">
					Budget Traveling
				</Link>
				<Link className="underline" href="/posts?cat=points-rewards">
					Points & Rewards
				</Link>
			</div>
		</div>
	);
};

export default SideMenu;
