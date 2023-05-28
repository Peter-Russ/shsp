import NextAuth from "next-auth/next";

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            name: string;
            email: string;
            image: string | null;
            blocked: boolean;
            subscribers: string[];
            subscribersUsers: string[];
            accessToken: string;

        }
    }
}