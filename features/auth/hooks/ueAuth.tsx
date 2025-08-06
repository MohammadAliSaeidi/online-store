import { isAxiosError } from "axios";
import { toast } from "sonner";
import { AuthFormValues } from "../types/AuthFormValues";
import useAuthMutation from "./useAuthMutation";

type Props = {
	onAuthenticated: (token: string) => void;
};

export const useAuth = ({ onAuthenticated }: Props) => {
	const { isPending, mutateAsync } = useAuthMutation();

	const handleAuthentication = async (formData: AuthFormValues) => {
		try {
			const response = await mutateAsync(formData);

			if (response.status === 201) {
				onAuthenticated(response.data.token);
			} else {
				toast.error("Authentication failed please try again");
			}
		} catch (e) {
			if (isAxiosError(e)) {
				if (e.status === 401) {
					toast.error("Username or password is incorrect");
				}
			} else {
				toast.error("Authentication failed please try again");
			}
		}
	};

	return { handleAuthentication, isPending };
};
