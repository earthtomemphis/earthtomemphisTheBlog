import Image from 'next/image';
import Link from 'next/link';
import featured1 from '../../public/featured1.jpeg';
import featured2 from '../../public/featured2.jpeg';
import featured3 from '../../public/featured3.jpeg';
import featured4 from '../../public/featured4.jpeg';

const FeaturedPosts = () => {
	return (
		<div className="mt-8 flex flex-col lg:flex-row gap-8">
			{/* FIRST */}
			<div className="w-full lg:w-1/2 flex flex-col gap-4">
				{/* image */}
				<Image
					src={featured1}
					alt=""
					className="rounded-3xl object-cover"
					width={895}
					height={895}
				/>
				{/* details */}
				<div className="flex items-center gap-4">
					<h1 className="font-semibold lg:text-lg">01.</h1>
					<Link href="/" className="text-blue-800 lg:text-lg">
						Travel Tips
					</Link>
					<span className="text-gray-500">2 days ago</span>
				</div>
				{/* title */}
				<Link
					href="/test"
					className="text-xl lg:text-3xl font-semibold lg:font-bold"
				>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
				</Link>
			</div>
			{/* OTHER */}
			<div className="w-full lg:w-1/2 flex flex-col gap-4">
				{/* SECOND */}
				<div className="lg:h-1/3 flex justify-between gap-4">
					<div className="w-1/3 aspect-video">
						<Image
							src={featured2}
							alt=""
							className="rounded-3xl object-cover w-full h-full"
							width={298}
							height={298}
						/>
					</div>
					{/* details and title */}
					<div className="w-2/3">
						{/* details */}
						<div className="flex items-center gap-4 text-sm lg:text-base mb-4">
							<h1 className="font-semibold">02.</h1>
							<Link href="/post" className="text-blue-800">
								Travel Tips
							</Link>
							<span className="text-gray-500 text-sm">
								2 days ago
							</span>
						</div>
						{/* title */}
						<Link
							href="/test"
							className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
						>
							Lorem ipsum dolor sit, amet consectetur adipisicing.
						</Link>
					</div>
				</div>
				{/* THIRD */}
				<div className="lg:h-1/3 flex justify-between gap-4">
					<div className="w-1/3 aspect-video">
						<Image
							src={featured3}
							alt=""
							className="rounded-3xl object-cover w-full h-full"
							width={298}
							height={298}
						/>
					</div>
					{/* details and title */}
					<div className="w-2/3">
						{/* details */}
						<div className="flex items-center gap-4 text-sm lg:text-base mb-4">
							<h1 className="font-semibold">03.</h1>
							<Link href="/post" className="text-blue-800">
								Travel Tips
							</Link>
							<span className="text-gray-500 text-sm">
								2 days ago
							</span>
						</div>
						{/* title */}
						<Link
							href="/test"
							className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
						>
							Lorem ipsum dolor sit, amet consectetur adipisicing.
						</Link>
					</div>
				</div>
				{/* FOURTH */}
				<div className="lg:h-1/3 flex justify-between gap-4">
					<div className="w-1/3 aspect-video">
						<Image
							src={featured4}
							alt=""
							className="rounded-3xl object-cover w-full h-full"
							width={298}
							height={298}
						/>
					</div>
					{/* details and title */}
					<div className="w-2/3">
						{/* details */}
						<div className="flex items-center gap-4 text-sm lg:text-base mb-4">
							<h1 className="font-semibold">04.</h1>
							<Link href="/post" className="text-blue-800">
								Travel Tips
							</Link>
							<span className="text-gray-500 text-sm">
								2 days ago
							</span>
						</div>
						{/* title */}
						<Link
							href="/test"
							className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
						>
							Lorem ipsum dolor sit, amet consectetur adipisicing.
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturedPosts;
