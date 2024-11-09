import StudentHeader from '@/components/StudentHeader/StudentHeader';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<StudentHeader />
			{children}
		</>
	);
};

export default Layout;
