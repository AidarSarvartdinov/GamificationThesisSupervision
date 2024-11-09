import { useAppSession } from '@/hooks/useAppSession';
import { useStudent } from '@/hooks/useStudent';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Profile = () => {
	const { data: session } = useAppSession();
	const { data, isError } = useStudent(session?.user.id as number);
	return (
		<>
			<div>
				{session?.user.image ? (
					<img src={data?.image}></img>
				) : (
					<FontAwesomeIcon
						icon={faUserGraduate}
						style={{ color: '#088c1e', width: '70%', height: '70%' }}
					/>
				)}
			</div>
			<div>
				<div>
					{session?.user.name}
					{session?.user.email}
					{session?.user.number}
				</div>
				<div>
					{data?.work ? <p>{data.work.title}</p> : <p></p>}
					{data?.supervisor ? <p>{data.supervisor.name}</p> : <p></p>}
				</div>
			</div>
		</>
	);
};

export default Profile;
