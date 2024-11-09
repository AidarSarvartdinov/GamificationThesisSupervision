'use client';

import React, { useEffect, useState } from 'react';
import { Student } from '@/types/student';
import styles from './StudentDetails.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'next/navigation';
import { useStudent } from '@/hooks/useStudent';
// import getStudentById from '@/app/api/getStudentById';
// import { getStudentById } from '@/lib/firestore';

const StudentDetailsPage: React.FC = () => {
	const params = useParams();
	const studentID: string = params.studentID as string;
	console.log(studentID);

	const { data, isError } = useStudent(+studentID);

	// useEffect((): void => {
	// 	if (studentID) {
	// 		const fetchStudent = async (): Promise<void> => {
	// 			try {
	// 				const studentData: Student = await getStudentById(studentID);
	// 				setStudent(studentData);
	// 			} catch (error) {
	// 				console.error((error as Error).message);
	// 			}
	// 		};

	// 		fetchStudent();
	// 	}
	// }, [studentID]);

	// if (!student) {
	// 	return null;
	// }

	if (isError) {
		return <h3>Data acquisition error</h3>;
	}

	return (
		<>
			<div>
				<div className={styles.studentDetails}>
					{data?.image ? (
						<img src={data.image}></img>
					) : (
						<div className={styles.profilePlaceholder}>
							<FontAwesomeIcon
								icon={faUserGraduate}
								style={{ color: '#088c1e', width: '70%', height: '70%' }}
							/>
						</div>
					)}
					<h1 className={styles.h1}>{data?.name}</h1>

					<p className={styles.p}>Email: {data?.email}</p>
					<p className={styles.p}>Number: {data?.number}</p>
					{data?.work ? (
						<div>
							<h2 className={styles.h2}>Research</h2>
							<p className={`${styles.workItem}`}>{data?.work.title}</p>
						</div>
					) : (
						<p>This student has not chosen a research topic yet</p>
					)}
				</div>
			</div>
		</>
	);
};

export default StudentDetailsPage;
