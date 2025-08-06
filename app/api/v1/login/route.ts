import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	const body = await request.json();

	const response = await fetch("https://fakestoreapi.com/auth/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(body),
	});

	if (response.status === 201) {
		const cookieStore = await cookies();
		const { token } = await response.json();
		cookieStore.set("token", token, {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			sameSite: "lax",
			path: "/",
			maxAge: 60 * 60 * 24 * 7,
		});
	}

	return NextResponse.json({}, { status: response.status });
}
