import Image from 'next/image';
import postImg from '../../public/postImg.jpeg';
import Link from 'next/link';

const PostListItem = () => {
	return (
		<div className="flex flex-col md:flex-row items-center gap-8">
			{/* image */}
			<div className="w-full md:w-1/2 lg:w-1/3">
				<Image
					src={postImg}
					className="rounded-2xl object-cover"
					width={735}
					alt=""
				/>
			</div>
			{/* details */}
			<div className="flex flex-1 w-max flex-col gap-2 mt-2 md:w-1/2 xl:w-2/3">
				<Link href="/test" className="text-2xl font-semibold">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</Link>
				<div className="flex items-center gap-2 text-gray-400 text-sm">
					<span>Written by</span>
					<Link href="/test" className="text-blue-800">
						Memphis
					</Link>
					<span>on</span>
					<Link href="/test" className="text-blue-800">
						Travel Tips
					</Link>
					<span>2 days ag</span>
				</div>
				<span className="text-gray-400 text-xs">10 minute read</span>
				<p className="text-sm ">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Voluptates eveniet dolor perferendis doloremque vel nisi?
					Maiores quos accusamus maxime ipsa id beatae, dicta eius!
					Officiis earum exercitationem repellendus error animi.
				</p>
				<Link href="/text" className="underline text-blue-800 text-sm">
					Read More
				</Link>
			</div>
		</div>
	);
};

export default PostListItem;
