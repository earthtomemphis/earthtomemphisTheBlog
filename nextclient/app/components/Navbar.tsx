'use client';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<div className="w-full h-16 md:h-20 flex items-center justify-between">
			{/* LOGO */}
			<Link
				href="/"
				className="flex items-center gap-4 text-2xl font-bold"
			>
				<span>earthtomemphis</span>
			</Link>
			{/* MOBILE MENU */}
			<div className="md:hidden">
				{/* MOBILE BTN */}
				<div
					className="cursor-pointer text-4xl"
					onClick={() => setOpen((prev) => !prev)}
				>
					{open ? 'X' : '☰'}
				</div>
				{/* MOBILE LINK LIST */}
				<div
					className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-xl absolute top-16 transition-all ease-in-out bg-[#e6e6ff] ${
						open ? 'right-0' : '-right-full'
					} `}
				>
					<Link href="#">Home</Link>
					<Link href="#">Trending</Link>
					<Link href="#">Most Popular</Link>
					<Link href="#">About</Link>
				</div>
			</div>
			{/* DESKTOP MENU */}
			<div className="hidden md:flex items-center gap-6 xl:gap-12 font-medium">
				<Link href="#">Home</Link>
				<Link href="#">Trending</Link>
				<Link href="#">Most Popular</Link>
				<Link href="#">About</Link>
				<Link href="login">
					<button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
						Login 👋
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
