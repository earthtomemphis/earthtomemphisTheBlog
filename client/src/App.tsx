import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import YouTube from './pages/YouTube';
import Newsletter from './components/Newsletter';

const App = () => {
	// const [message, setMessage] = useState('');

	// useEffect(() => {
	// 	const getMessage = async () => {
	// 		try {
	// 			const res = await axios.get('/api/message');
	// 			setMessage(res.data.msg);
	// 		} catch (err) {
	// 			console.log(err);
	// 		}
	// 	};
	// 	getMessage();
	// }, []);

	return (
		<main className="min-h-screen bg-lime-200 flex flex-col">
			<Navbar />
			<YouTube />
			<Newsletter />
			{/* <p>{message}</p> */}
			<Footer />
		</main>
	);
};

export default App;
