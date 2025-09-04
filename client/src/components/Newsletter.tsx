const Newsletter = () => {
	return (
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
	);
};

export default Newsletter;
