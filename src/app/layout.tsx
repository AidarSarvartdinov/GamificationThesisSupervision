import React from 'react';
import '../styles/globals.css';
import AuthSessionProvider from '@/providers/AuthSession';
import QueryProvider from '@/providers/QueryProvider';

export const metadata = {
	icons: {
		icon: './favicon.ico',
	},
	authors: [{ name: 'Aidar Sarvartdinov' }],
};

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="en">
			<AuthSessionProvider>
				<QueryProvider>
					<body>{children}</body>
				</QueryProvider>
			</AuthSessionProvider>
		</html>
	);
};

export default Layout;
