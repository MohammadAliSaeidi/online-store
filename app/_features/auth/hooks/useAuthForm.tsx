import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { authFormSchema } from "../schema";
import { AuthFormValues } from "../types/AuthFormValues";
import { useAuth } from "./ueAuth";

const useAuthForm = () => {
	const onAuthenticated = (token: string) => {
		console.log(token);
	};

	const { handleAuthentication } = useAuth({ onAuthenticated });

	const form = useForm<AuthFormValues>({
		resolver: zodResolver(authFormSchema),
		defaultValues: {
			password: "",
			username: "",
		},
	});

	const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

	const onSubmit = form.handleSubmit((formData: AuthFormValues) => {
		handleAuthentication(formData);
	});

	return { onSubmit, form, isPasswordVisible, setIsPasswordVisible };
};

export default useAuthForm;
