import axiosInstance from "@/lib/axios";
import { AuthFormValues } from "../../types/AuthFormValues";

const authenticate = async (authInfo: AuthFormValues) =>
	await axiosInstance.post("api/v1/login", authInfo, {
		baseURL: "/",
	});

export default authenticate;
