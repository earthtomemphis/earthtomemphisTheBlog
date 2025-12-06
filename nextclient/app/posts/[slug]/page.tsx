import Image from 'next/image';
import Link from 'next/link';
import postImg from '../../../public/postImg.jpeg';

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
			</div>
		</div>
	);
};

export default SinglePostPage;
