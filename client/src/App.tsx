import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
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
		<div>
			<h1 className="bg-amber-800">Hello from client</h1>
			<p>{message}</p>
		</div>
	);
}

export default App;
