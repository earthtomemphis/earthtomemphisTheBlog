const Navbar = () => {
	return (
		<nav className="mb-8 flex justify-between bg-lime-500 px-8 py-6 text-lime-100">
			<h1 className="text-2xl font-bold">EarthToMemphis</h1>
			<div className="flex gap-4 text-2xl">
				<a href="#">Home</a>
				<a href="#">Blog</a>
				<a href="#">YouTube</a>
				<a href="#">Contact</a>
			</div>
		</nav>
	);
};

export default Navbar;
