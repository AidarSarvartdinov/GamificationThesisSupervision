import { useSignOut } from '@/hooks/useSignOut';
import Link from 'next/link';
import React from 'react';
import styles from './StudentHeader.module.css';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StudentHeader = () => {
	const { signOut, isPending } = useSignOut();
	return (
		<header>
			<nav>
				<Link href="/student/research">Research</Link>
        <Link href="/student/supervisor">Supervisor</Link>
        <Link href="/student/profile">Profile</Link>
      </nav>  
				<div className={styles.logout}>
					<button className={isPending ? 'disabled' : ''} onClick={() => signOut()}>
						<FontAwesomeIcon icon={faSignOutAlt} className={styles.logoutIcon} />
					</button>
				</div>
		</header>
	);
};

export default StudentHeader;
