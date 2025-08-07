import axiosInstance from "@/lib/axios";
import { AuthFormValues } from "../../types/AuthFormValues";

const authenticate = async (authInfo: AuthFormValues) =>
	await axiosInstance.post("/auth/login", authInfo);

export default authenticate;
