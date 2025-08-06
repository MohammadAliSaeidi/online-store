import { useMutation } from "@tanstack/react-query";
import authenticate from "../services/api/authenticate";

export default function useAuthMutation() {
	return useMutation({ mutationFn: authenticate });
}
