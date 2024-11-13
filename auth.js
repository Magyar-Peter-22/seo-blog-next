import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import bcrypt from 'bcrypt';

async function getUser(username) {
    return undefined;
}

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                //const parsedCredentials = z
                //    .object({ username: z.string().min(3), password: z.string().min(6) })
                //    .safeParse(credentials);
                //
                //if (parsedCredentials.success) {
                //    const { username, password } = parsedCredentials.data;
                //    const user = await getUser(username);
                //    if (!user) return null;
                //    const passwordsMatch = await bcrypt.compare(password, user.password);
                //    if (passwordsMatch) return user;
                //}
                //console.log('Invalid credentials');
                //return null;
                return null;
            },
        }),
    ],
});