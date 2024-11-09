import ProfessorHeader from '@/components/ProfessorHeader/ProfessorHeader';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<ProfessorHeader />
			{children}
		</>
	);
};

export default Layout;
