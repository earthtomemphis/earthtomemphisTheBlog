import Image from 'next/image';
import Link from 'next/link';
import postImg from '../../../public/postImg.jpeg';
import userImg from '../../../public/userImg.jpeg';
import facebook from '../../../public/facebook.svg';
import instagram from '../../../public/instagram.svg';
import Search from '@/app/components/Search';
import Comments from '@/app/components/Comments';
import PostMenuActions from '@/app/components/PostMenuActions';

const SinglePostPage = () => {
	return (
		<div className="flex flex-col gap-8">
			{/* details */}
			<div className="flex gap-8">
				<div className="lg:w-3/5 flex flex-col gap-8">
					<h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Sequi, placeat.
					</h1>
					<div className="flex items-center gap-2 text-gray-400 text-sm">
						<span>Written by</span>
						<Link href="/test" className="text-blue-800">
							Memphis
						</Link>
						<span>on</span>
						<Link href="/test" className="text-blue-800">
							Travel Tips
						</Link>
						<span>2 days ago</span>
					</div>
					<p className="text-gray-500 font-medium">
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Necessitatibus, totam quisquam accusamus incidunt
						est a tempora natus, earum corrupti sit aut quo aliquid!
						Cum libero aperiam incidunt, cumque quibusdam quam!
					</p>
				</div>
				<div className="hidden lg:block w-2/5">
					<Image
						src={postImg}
						width={600}
						alt=""
						className="rounded-2xl"
					/>
				</div>
			</div>
			{/* content */}
			<div className="flex flex-col md:flex-row gap-12">
				{/* text */}
				<div className="lg:text-lg flex flex-col gap-6 text-justify">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Reiciendis, odit officiis cupiditate, assumenda nihil
						sint rem quos quas maxime corrupti nam doloremque
						adipisci in cumque impedit nemo itaque! Ab,
						voluptatibus. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Reiciendis, odit officiis cupiditate,
						assumenda nihil sint rem quos quas maxime corrupti nam
						doloremque adipisci in cumque impedit nemo itaque! Ab,
						voluptatibus. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Reiciendis, odit officiis cupiditate,
						assumenda nihil sint rem quos quas maxime corrupti nam
						doloremque adipisci in cumque impedit nemo itaque! Ab,
						voluptatibus.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Reiciendis, odit officiis cupiditate, assumenda nihil
						sint rem quos quas maxime corrupti nam doloremque
						adipisci in cumque impedit nemo itaque! Ab,
						voluptatibus. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Reiciendis, odit officiis cupiditate,
						assumenda nihil sint rem quos quas maxime corrupti nam
						doloremque adipisci in cumque impedit nemo itaque! Ab,
						voluptatibus. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Reiciendis, odit officiis cupiditate,
						assumenda nihil sint rem quos quas maxime corrupti nam
						doloremque adipisci in cumque impedit nemo itaque! Ab,
						voluptatibus.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Reiciendis, odit officiis cupiditate, assumenda nihil
						sint rem quos quas maxime corrupti nam doloremque
						adipisci in cumque impedit nemo itaque! Ab,
						voluptatibus. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Reiciendis, odit officiis cupiditate,
						assumenda nihil sint rem quos quas maxime corrupti nam
						doloremque adipisci in cumque impedit nemo itaque! Ab,
						voluptatibus. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Reiciendis, odit officiis cupiditate,
						assumenda nihil sint rem quos quas maxime corrupti nam
						doloremque adipisci in cumque impedit nemo itaque! Ab,
						voluptatibus.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Reiciendis, odit officiis cupiditate, assumenda nihil
						sint rem quos quas maxime corrupti nam doloremque
						adipisci in cumque impedit nemo itaque! Ab,
						voluptatibus. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Reiciendis, odit officiis cupiditate,
						assumenda nihil sint rem quos quas maxime corrupti nam
						doloremque adipisci in cumque impedit nemo itaque! Ab,
						voluptatibus. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Reiciendis, odit officiis cupiditate,
						assumenda nihil sint rem quos quas maxime corrupti nam
						doloremque adipisci in cumque impedit nemo itaque! Ab,
						voluptatibus.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Reiciendis, odit officiis cupiditate, assumenda nihil
						sint rem quos quas maxime corrupti nam doloremque
						adipisci in cumque impedit nemo itaque! Ab,
						voluptatibus. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Reiciendis, odit officiis cupiditate,
						assumenda nihil sint rem quos quas maxime corrupti nam
						doloremque adipisci in cumque impedit nemo itaque! Ab,
						voluptatibus. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Reiciendis, odit officiis cupiditate,
						assumenda nihil sint rem quos quas maxime corrupti nam
						doloremque adipisci in cumque impedit nemo itaque! Ab,
						voluptatibus.
					</p>
				</div>
				{/* menu */}
				<div className="px-4 h-max sticky top-8">
					<h1 className="mb-4 text-sm font-medium">Author</h1>
					<div className="flex flex-col gap-4">
						<div className="flex items-center gap-8">
							<Image
								src={userImg}
								alt=""
								className="w-12 h-12 rounded-full object-cover"
								width={48}
								height={48}
							/>
							<Link href="" className="text-blue-800">
								Memphis
							</Link>
						</div>
						<p className="text-sm text-gray-500">
							Lorem ipsum dolor sit amet consectetur.
						</p>
						<div className="flex gap-2">
							<Link href="#">
								<Image src={facebook} alt="" />
							</Link>
							<Link href="#">
								<Image src={instagram} alt="" />
							</Link>
						</div>
					</div>
					{/* todo */}
					<PostMenuActions />
					<h1 className="mt-8 mb-4 text-sm font-medium">
						Categories
					</h1>
					<div className="flex flex-col gap-2 text-sm">
						<Link href="#" className="underline">
							All
						</Link>
						<Link href="#" className="underline">
							Travel Tips
						</Link>
						<Link href="#" className="underline">
							Travel Stories
						</Link>
						<Link href="#" className="underline">
							Budget Traveling
						</Link>
						<Link href="#" className="underline">
							Points & Rewards
						</Link>
					</div>
					<h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
					<Search />
				</div>
			</div>
			<Comments />
		</div>
	);
};

export default SinglePostPage;
