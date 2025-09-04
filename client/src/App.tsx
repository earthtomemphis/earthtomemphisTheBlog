import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
	const [message, setMessage] = useState('');

	useEffect(() => {
		const getMessage = async () => {
			try {
				const res = await axios.get('/api/message');
				setMessage(res.data.msg);
			} catch (err) {
				console.log(err);
			}
		};
		getMessage();
	}, []);

	return (
		<main className="min-h-screen bg-lime-200 flex flex-col">
			<nav className="mb-8 flex justify-between bg-lime-500 px-8 py-6 text-lime-100">
				<h1 className="text-2xl font-bold">EarthToMemphis</h1>
				<div className="flex gap-4 text-2xl">
					<a href="#">Home</a>
					<a href="#">Blog</a>
					<a href="#">YouTube</a>
					<a href="#">Contact</a>
				</div>
			</nav>
			<section className="space-y-6 flex-grow">
				<h2 className="mb-4 text-2xl text-center font-semibold text-lime-700">
					My YouTube Videos
				</h2>
				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
					<div className="bg-lime-400 p-4 rounded hover:bg-lime-400/80 hover:text-lime-100 hover:shadow-lg">
						<iframe
							width="100%"
							src="https://youtube.com/embed/VZ1lCwkRElw"
						></iframe>
					</div>
					<div className="bg-lime-400 p-4 rounded hover:bg-lime-400/80 hover:text-lime-100 hover:shadow-lg">
						<iframe
							width="100%"
							src="https://youtube.com/embed/T75Bns4xcj0"
						></iframe>
					</div>
					<div className="bg-lime-400 p-4 rounded hover:bg-lime-400/80 hover:text-lime-100 hover:shadow-lg">
						<iframe
							width="100%"
							src="https://youtube.com/embed/lzkxdnArSvY"
						></iframe>
					</div>
				</div>
			</section>
			<section className="text-center bg-lime-500 flex flex-col text-lime-100 p-4 space-y-2 items-center justify-center">
				<h2>Never miss an update from me!</h2>
				<form action="#" className="flex flex-col">
					<label htmlFor="email">Enter your First Name</label>
					<input
						type="text"
						name="name"
						id="name"
						className="bg-lime-300 my-2 rounded-2xl shadow-3xl"
					/>
					<label htmlFor="email">Enter your Email</label>
					<input
						type="email"
						name="email"
						id="email"
						className="bg-lime-300 my-2 rounded-2xl shadow-2xl"
					/>
					<button className="bg-lime-700 p-2 rounded-3xl mt-2">
						Sign me up!
					</button>
				</form>
			</section>
			<p>{message}</p>
			<footer className="bg-lime-500 text-center text-lime-100 py-6 mt-4">
				&copy; 2025 earthtomemphis. All rights reserved.
			</footer>
		</main>
	);
};

export default App;
