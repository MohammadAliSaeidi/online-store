import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import AuthForm from "../AuthForm";

const AUTH_FORM_ID = "auth-form";

export default function AuthCard() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Login</CardTitle>
				<CardDescription>Login to your account</CardDescription>
			</CardHeader>
			<CardContent>
				<AuthForm formId={AUTH_FORM_ID} />
			</CardContent>
			<CardFooter>
				<Button type="submit" form={AUTH_FORM_ID}>
					Login
				</Button>
			</CardFooter>
		</Card>
	);
}
