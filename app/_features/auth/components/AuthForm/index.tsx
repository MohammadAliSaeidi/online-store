"use client";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { EyeClosedIcon, EyeIcon } from "lucide-react";
import useAuthForm from "../../hooks/useAuthForm";

type Props = {
	formId: string;
};

export default function AuthForm({ formId }: Props) {
	const { onSubmit, form, isPasswordVisible, setIsPasswordVisible } =
		useAuthForm();

	const { control } = form;

	return (
		<Form {...form}>
			<form
				id={formId}
				onSubmit={onSubmit}
				className="flex flex-col gap-4"
			>
				<FormField
					control={control}
					name="username"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Username</FormLabel>
							<FormControl>
								<Input placeholder="username" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<div className="relative">
									<Input
										className="pr-12"
										placeholder="password"
										type={
											isPasswordVisible
												? "text"
												: "password"
										}
										{...field}
									/>
									<Button
										className="right-1.5 top-1/2 -translate-y-1/2 absolute"
										type="button"
										variant="ghost"
										size="icon"
										onClick={() =>
											setIsPasswordVisible(
												(prev) => !prev
											)
										}
									>
										{isPasswordVisible ? (
											<EyeIcon />
										) : (
											<EyeClosedIcon />
										)}
									</Button>
								</div>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			</form>
		</Form>
	);
}
