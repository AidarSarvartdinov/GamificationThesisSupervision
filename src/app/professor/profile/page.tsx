'use client'

import React from 'react';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { useAppSession } from '@/hooks/useAppSession';
import { useWorks } from '@/hooks/useWorks';
import { Work } from '@/types/work';

const Profile = () => {
    const {data: session} = useAppSession();
    const {data, isError} = useWorks(session?.user.id as number);
	return (
		<>
			<div className={styles.studentDetails}>
				<div className={styles.profilePlaceholder}>
					<FontAwesomeIcon
						icon={faUserGraduate}
						style={{ color: '#088c1e', width: '70%', height: '70%' }}
					/>
				</div>
				<h1 className={styles.h1}>{session?.user.name}</h1>
				<p className={styles.p}>Email: {session?.user.email}</p>
				<p className={styles.p}>Number: {session?.user.number}</p>
				<h3>Works</h3>
                <ul>
                    {data?.map((work: Work) => <li>{work.title}</li>)}
                </ul>
			</div>
		</>
	);
};

export default Profile;
