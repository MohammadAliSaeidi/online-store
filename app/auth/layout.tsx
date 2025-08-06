import { PropsWithChildren } from "react";

export default function layout({ children }: PropsWithChildren) {
	return (
		<div className="w-full h-dvh flex justify-center items-center px-4">
			{children}
		</div>
	);
}
