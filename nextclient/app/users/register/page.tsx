import { SignUp } from '@clerk/nextjs';

const RegisterPage = () => {
	return (
		<div className="flex items-center justify-center h-[calc(100vh-80px)]">
			<SignUp routing="hash" signInUrl="/users/login" />
		</div>
	);
};

export default RegisterPage;
