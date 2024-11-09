import { Work } from '@/types/work';
import { IUser } from './user';
import { Professor } from './professor';

export interface Student extends IUser {
	work: Work | undefined;
	supervisor: Professor | undefined;
	themes: string | undefined | null
}
