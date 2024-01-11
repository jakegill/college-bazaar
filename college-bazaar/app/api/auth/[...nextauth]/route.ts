import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                try {
                    return null;
                } catch (error) {
                    throw new Error(error)
                }
            }
        })
    ],
    pages: {
        signIn: "/login",
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }