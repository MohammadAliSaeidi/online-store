import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { authFormSchema } from "../schema";
import { AuthFormValues } from "../types/AuthFormValues";

const useAuthForm = () => {
	const { handleSubmit, register } = useForm<AuthFormValues>({
		resolver: zodResolver(authFormSchema),
	});

	const onSubmit = handleSubmit((formData: AuthFormValues) => {
		console.log(formData);
	});

	return { onSubmit, register };
};

export default useAuthForm;
