import { SignUp } from '@clerk/nextjs';

const registerPage = () => {
	return (
		<div className="flex items-center justify-center h-[calc(100vh-80px)]">
			<SignUp signInUrl="/login" />
		</div>
	);
};

export default registerPage;
