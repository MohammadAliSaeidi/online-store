"use client";

import { useRouter } from "next/navigation";
import AuthCard from "../../features/auth/components/AuthCard";

const Auth = () => {
	const { push } = useRouter();

	const handleNavigateToHome = () => {
		push("/");
	};

	return <AuthCard onAuthenticated={handleNavigateToHome} />;
};

export default Auth;
