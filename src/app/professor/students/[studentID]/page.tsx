import React from 'react';
import StudentDetailsPage from '@/components/StudentDetails/StudentDetails';

export const metadata = {
	title: 'Student details',
	description: "Here you can see student's details and information about him and his works.",
};

const StudentPage = (): React.JSX.Element | null => {
	return (
		<div>
			<StudentDetailsPage />
		</div>
	);
};

export default StudentPage;
