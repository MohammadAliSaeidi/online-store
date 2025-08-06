import { PropsWithChildren } from "react";

export default function layout({ children }: PropsWithChildren) {
	return (
		<div className="w-full h-dvh grid justify-center items-center">
			{children}
		</div>
	);
}
