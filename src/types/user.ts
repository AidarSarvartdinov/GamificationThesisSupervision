export type Role = 'student' | 'professor' | 'admin';

export interface IUser {
	id: number;
	name: string;
	email: string;
	accessToken?: string;
	role: Role;
	image: string;
	number: string;
}
