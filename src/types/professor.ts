import { Student } from './student';
import { IUser } from './user';
import { Work } from './work';

export interface Professor extends IUser {
	works: Work[];
	students: Student[];
}
