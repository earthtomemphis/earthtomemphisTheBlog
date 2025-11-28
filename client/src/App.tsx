import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import YouTube from './pages/YouTube';
import Newsletter from './components/Newsletter';
import { useEffect, useState } from 'react';
import axios from 'axios';
import img1 from './assets/IMG_3762.jpeg';
import img2 from './assets/IMG_3787.jpeg';
import img3 from './assets/IMG_3871.jpeg';
import img4 from './assets/IMG_4473.jpeg';
import img5 from './assets/IMG_4566.jpeg';
import img6 from './assets/IMG_4653.jpeg';

const App = () => {
	// const [message, setMessage] = useState('');
	// const [youtubeLink, setYoutubeLink] = useState([]);

	useEffect(() => {
		// const getMessage = async () => {
		// 	try {
		// 		const res = await axios.get('/api/message');
		// 		setMessage(res.data.msg);
		// 	} catch (err) {
		// 		console.log(err);
		// 	}
		// };
		// getMessage();
		// const getYoutubeLink = async () => {
		// 	try {
		// 		const res = await axios.get('/api/youtube');
		// 		console.log(res.data);
		// 		const data = { ...res.data.youtubeLinks };
		// 		setYoutubeLink(data);
		// 		// setMessage(res.data.msg);
		// 	} catch (err) {
		// 		console.log(err);
		// 	}
		// };
		// getYoutubeLink();
	}, []);

	return (
		<main className="min-h-screen bg-lime-200 flex flex-col">
			<Navbar />
			<YouTube />
			<div className="flex items-center justify-center flex-col">
				<h2 className="mb-4 mt-4 text-2xl text-center font-semibold text-lime-700">
					Shop
				</h2>
				<div className="grid grid-cols-3 gap-6">
					<img src={img1} className="w-72" alt="" />
					<img src={img2} className="w-72" alt="" />
					<img src={img3} className="w-72" alt="" />
					<img src={img4} className="w-72" alt="" />
					<img src={img5} className="w-72" alt="" />
					<img src={img6} className="w-72" alt="" />
				</div>
			</div>
			{/* <div>
				{youtubeLink.map((link) => (
					<p>{link}</p>
				))}
			</div> */}
			<Newsletter />
			<div className="flex items-center justify-center p-2">
				<a href="#">
					<i className="fa-brands fa-youtube fa fa-xl"></i>
				</a>
				<a href="#">
					<i className="fa-brands fa-instagram fa-xl"></i>
				</a>
				<a href="#">
					<i className="fa-brands fa-x-twitter fa-xl"></i>
				</a>
			</div>
			{/* <p>{message}</p> */}
			<Footer />
		</main>
	);
};

export default App;
