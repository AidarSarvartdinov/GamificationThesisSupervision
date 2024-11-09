import NextAuth from 'next-auth';
import { Role, IUser } from './user';

declare module 'next-auth/jwt' {
	interface JWT {
		role: Role;
	}
}

declare module 'next-auth' {
	interface Session {
		user: IUser;
	}
	
	interface User extends IUser {}
}
