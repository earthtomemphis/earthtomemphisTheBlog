const YouTube = () => {
	return (
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
	);
};

export default YouTube;
