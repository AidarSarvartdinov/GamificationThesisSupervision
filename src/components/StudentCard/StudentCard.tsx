import React from 'react';
import Link from 'next/link';
import { Student } from '@/types/student';
import styles from './StudentCard.module.css';

interface UserCardProps {
	student: Student;
}

const StudentCard: React.FC<UserCardProps> = ({ student }) => {
	return (
		<div className={styles.userCard}>
			{student.image ? (
				<div>
					<img src={student.image}></img>
				</div>
			) : (
				<div className={styles.profilePlaceholder}></div>
			)}
			<h2>{student.name}</h2>
			<div>{student.work?.title}</div>
			<Link href={`/students/${student.id}`}>
				<button className={styles.viewDetailsButton}>View Details</button>
			</Link>
		</div>
	);
};

export default StudentCard;
