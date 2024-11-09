'use client';

import React, { useEffect, useState } from 'react';
import StudentCard from '../StudentCard/StudentCard';
import { Student } from '@/types/student';
import styles from './StudentList.module.css';
// import { useSession } from 'next-auth/react';
// import getStudents from '@/app/api/getStudents';
// import { useQuery } from '@tanstack/react-query';
import { useStudents } from '@/hooks/useStudents';
import { useAppSession } from '@/hooks/useAppSession';

const StudentList: React.FC = () => {
	// const [students, setStudents] = useState<Student[]>([]);
	const {data:session} = useAppSession();
	const {data, isError} = useStudents(session?.user.id as number);

	// useEffect(() => {
	// 	const fetchStudents = async () => {
	// 		const studentsData: Student[] = await getStudents(session?.user.id as number);
	// 		setStudents(studentsData);
	// 	};
	// 	fetchStudents();
	// }, []);

	if (isError) {
		return <h3>Data acquisition error</h3>
	}

	return (
		<div className={styles.userList}>
			{data?.map((student: Student) => (
				<StudentCard key={student.id} student={student} />
			))}
		</div>
	);
};

export default StudentList;
