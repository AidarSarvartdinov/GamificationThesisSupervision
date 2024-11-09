

import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './ProfessorHeader.module.css';
import { useSignOut } from '@/hooks/useSignOut';

const ProfessorHeader: React.FC = () => {
	const { signOut, isPending } = useSignOut();

	return (
		<header className={styles.header}>

			<nav className={styles.nav}>
				<Link href="/professor/researches">Researches</Link>
				<Link href="/professor/students">Your Students</Link>
				<Link href="/professor/profile">Profile</Link>
			</nav>

			<div className={styles.logout}>
				<button className={isPending? "disabled": ""} onClick={() => signOut()}>
					<FontAwesomeIcon icon={faSignOutAlt} className={styles.logoutIcon} />
				</button>
			</div>
		</header>
	);
};

export default ProfessorHeader;
