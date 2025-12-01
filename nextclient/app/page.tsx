import Link from 'next/link';
import MainCategories from './components/MainCategories';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import FeaturedPosts from './components/FeaturedPosts';
import { GiEarthAsiaOceania } from 'react-icons/gi';
import PostList from './components/PostList';
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '@/components/ui/pagination';

const Home = () => {
	return (
		<div className="mt-4 flex flex-col gap-4">
			{/* BREADCRUMBS */}
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink asChild>
							<Link href="/">Home</Link>
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage className="text-blue-800">
							Blog and Articles
						</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
			{/* <div className="flex gap-4">
				<Link href="/">Home</Link>
				<span>•</span>
				<span className="text-blue-800">Blog and Articles</span>
			</div> */}
			{/* INTRODUCTION */}
			<div className="flex items-center justify-between">
				{/* titles */}
				<div>
					<h1 className="text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold">
						Lorem ipsum dolor sit amet consectetur.
					</h1>
					<p className="mt-8 text-md md:text-xl">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Aliquam esse consequatur aut accusantium!
					</p>
				</div>
				{/* animated button */}
				<Link href="/write" className="hidden md:block relative">
					<svg
						viewBox="0 0 200 200"
						width="200"
						height="200"
						// className="text-lg tracking-widest animate-spin animatedButton"
						className="text-lg tracking-widest"
					>
						<path
							id="circlePath"
							fill="none"
							d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
						/>
						{/*
						 */}
					</svg>
					<button className="absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20 rounded-full flex items-center justify-center">
						<GiEarthAsiaOceania fontSize={100} className="" />
						{/* <svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							width="50"
							height="50"
							fill="none"
							stroke="white"
							strokeWidth="2"
						>
							<line x1="6" y1="18" x2="18" y2="6" />
							<polyline points="9 6 18 6 18 15" />
						</svg> */}
					</button>
				</Link>
			</div>
			{/* CATEGORIES */}
			<MainCategories />
			{/* FEATURED POST */}
			<FeaturedPosts />
			{/* POST LIST */}
			<h1 className="my-8 text-2xl text-gray-600">Recent Posts</h1>
			<PostList />
			<Pagination className="mb-8">
				<PaginationContent>
					<PaginationItem>
						<PaginationPrevious href="#" />
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href="#">1</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href="#">2</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href="#">3</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href="#">4</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationEllipsis />
					</PaginationItem>
					<PaginationItem>
						<PaginationNext href="#" />
					</PaginationItem>
				</PaginationContent>
			</Pagination>
		</div>
	);
};

export default Home;
