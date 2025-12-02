import { SignIn } from '@clerk/nextjs';

const LoginPage = () => {
	return (
		<div className="flex items-center justify-center h-[calc(100vh-80px)]">
			<SignIn routing="hash" signUpUrl="/users/register" />
		</div>
	);
};

export default LoginPage;
