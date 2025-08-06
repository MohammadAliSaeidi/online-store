import useAuthForm from "../../hooks/useAuthForm";

export default function AuthForm() {
	const { onSubmit, register } = useAuthForm();

	return (
		<form onSubmit={onSubmit}>
			<input {...register("username")} />
			<input {...register("password")} />
		</form>
	);
}
