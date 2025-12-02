'use client';
import { useUser } from '@clerk/nextjs';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

const WritePage = () => {
	const { isLoaded, isSignedIn } = useUser();

	if (!isLoaded) {
		return <div>Loading</div>;
	}

	if (isLoaded && !isSignedIn) {
		return <div>You should login!</div>;
	}
	return (
		<div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6">
			<h1 className="text-xl font-light">Create A New Post</h1>
			<form action="" className="flex flex-col gap-6 flex-1 mb-6">
				<button className="w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white">
					Add a cover image
				</button>
				<input
					type="text"
					className="text-4xl font-semibold bg-transparent outline-none"
					placeholder="My Awesome Story"
				/>
				<div className="flex items-center gap-4">
					<label htmlFor="" className="text-sm">
						Choose a category
					</label>
					<select
						name="cat"
						id=""
						className="p-2 rounded-xl bg-white shadow-md"
					>
						<option value="travel-tips">Travel Tips</option>
						<option value="travel-stories">Travel Stories</option>
						<option value="budget-traveling">
							Budget Traveling
						</option>
						<option value="points-rewards">Point & Rewards</option>
					</select>
				</div>
				<textarea
					name="desc"
					id=""
					placeholder="A Short Description"
					className="p-4 rounded-xl bg-white shadow-md"
				/>
				<ReactQuill
					theme="snow"
					className="flex-1 rounded-xl bg-white shadow-md"
				/>
				<button className="bg-blue-800 text-white font-medium rounded-xl mt-4 p-2 w-36">
					Send
				</button>
			</form>
		</div>
	);
};

export default WritePage;
