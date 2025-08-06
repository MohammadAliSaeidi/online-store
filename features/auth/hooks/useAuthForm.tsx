import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { authFormSchema } from "../schema";
import { AuthFormValues } from "../types/AuthFormValues";
import { useAuth } from "./useAuth";

type Props = {
	onAuthenticated: (token: string) => void;
	onPendingChange: (pending: boolean) => void;
};

const useAuthForm = ({ onAuthenticated, onPendingChange }: Props) => {
	const { handleAuthentication, isPending } = useAuth({ onAuthenticated });

	useEffect(() => {
		onPendingChange(isPending);
	}, [isPending, onPendingChange]);

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

	return {
		onSubmit,
		form,
		isPasswordVisible,
		setIsPasswordVisible,
		isPending,
	};
};

export default useAuthForm;
