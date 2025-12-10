import Image from 'next/image';
import userImg from '../../public/userImg.jpeg';

const Comment = () => {
	return (
		<div className="p-4 bg-slate-50 rounded-xl mb-8">
			<div className="flex items-center gap-4">
				<Image
					src={userImg}
					alt=""
					className="w-10 h-10 rounded-full object-cover"
					width={40}
				/>
				<span className="font-medium">John Doe</span>
				<span className="text-sm text-gray-500">2 days ago</span>
			</div>
			<div className="mt-4">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Nobis dignissimos quidem veritatis est id adipisci earum
					sequi! Voluptate asperiores doloribus, nihil ducimus
					dignissimos tempore doloremque consequuntur, architecto,
					assumenda enim esse?
				</p>
			</div>
		</div>
	);
};

export default Comment;
