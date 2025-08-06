import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import WithLoading from "@/components/WithLoading";
import { useState } from "react";
import AuthForm from "../AuthForm";

const AUTH_FORM_ID = "auth-form";

type Props = {
	onAuthenticated: (token: string) => void;
};

export default function AuthCard({ onAuthenticated }: Props) {
	const [isPending, setIsPending] = useState(false);

	return (
		<WithLoading isLoading={isPending} className="max-w-sm flex-1">
			<Card>
				<CardHeader>
					<CardTitle>Login</CardTitle>
					<CardDescription>Login to your account</CardDescription>
				</CardHeader>
				<CardContent>
					<AuthForm
						formId={AUTH_FORM_ID}
						onAuthenticated={onAuthenticated}
						onPendingChange={setIsPending}
					/>
				</CardContent>
				<CardFooter>
					<Button
						type="submit"
						disabled={isPending}
						form={AUTH_FORM_ID}
					>
						Login
					</Button>
				</CardFooter>
			</Card>
		</WithLoading>
	);
}
