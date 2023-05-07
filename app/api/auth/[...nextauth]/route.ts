import NextAuth, { AuthOptions} from 'next-auth';
import User from '@models/user';
import { connectToDB } from '@lib/database';
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt";
    
export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'email', type: 'text' },
                password: { label: 'password', type: 'password' }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error('Invalid credentials');
                }
        
                const user = await User.findOne({email: credentials.email});
        
                if (!user || !user?.hashedPassword) {
                throw new Error('Invalid credentials');
                }
        
                const isCorrectPassword = await bcrypt.compare(
                    credentials.password,
                    user.hashedPassword
                );
        
                if (!isCorrectPassword) {
                throw new Error('Invalid credentials');
                }
        
                return user;
            }
        })
    ],
    debug: process.env.NODE_ENV === 'development',
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    }
  
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }