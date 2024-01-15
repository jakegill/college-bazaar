import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/prisma";
import * as bcrypt from "bcrypt";

export const authOptions = {
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				username: { label: "Username", type: "text" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials) {
				const user = await prisma.user.findUnique({
					where: {
						email: credentials?.username as string,
					},
				});
				if (!user) throw new Error("User not found.");

				const isValidPassword = bcrypt.compare(
					credentials.password,
					user.password
				);
				if (!isValidPassword) throw new Error("Invalid credentials.");

                const {password, ...rest} = user;
                return rest;
			},
		}),
	],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
