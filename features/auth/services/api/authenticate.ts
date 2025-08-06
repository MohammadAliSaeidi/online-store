import axiosInstance from "@/lib/axios";
import { AuthFormValues } from "../../types/AuthFormValues";
import { AuthResponse } from "../../types/AuthResponse";

const authenticate = async (authInfo: AuthFormValues) =>
	await axiosInstance.post<AuthResponse>("api/v1/login", authInfo, {
		baseURL: "/",
	});

export default authenticate;
