import withAuth, { NextRequestWithAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';


export default withAuth(
	function middleware(request: NextRequestWithAuth) {
		if (request.nextUrl.pathname.startsWith('/professor')) {
			if (request.nextauth.token?.role === 'student') {
				return NextResponse.redirect(new URL('/student/profile', request.url));
			} else {
				return NextResponse.redirect(new URL('/admin/dashboard', request.url));
			}
		}

		if (request.nextUrl.pathname.startsWith('/student')) {
			if (request.nextauth.token?.role === 'professor') {
				return NextResponse.redirect(new URL('/professor/profile', request.url));
			} else {
				return NextResponse.redirect(new URL('/admin/dashboard', request.url));
			}
		}

		if (
			request.nextUrl.pathname.startsWith('/admin') &&
			request.nextauth.token?.role !== 'admin'
		) {
			return NextResponse.redirect(
				new URL(`/${request.nextauth.token?.role}/profile`, request.url),
			);
		}

		if (
			request.nextUrl.pathname.startsWith('/login') ||
			request.nextUrl.pathname.startsWith('/signup') ||
			request.nextUrl.pathname.startsWith('/')
		) {
			if (request.nextauth.token?.role === 'admin') {
				return NextResponse.redirect(new URL('/admin/dashboard', request.url));
			} else {
				return NextResponse.redirect(
					new URL(`/${request.nextauth.token?.role}/profile`, request.url),
				);
			}
		}
	},
	{
		callbacks: {
			authorized: ({ token }) => !!token,
		},
	},
);
export const config = {
	matcher: ['/professor/:path*', '/student/:path*', '/admin/:path*', '/signup', '/login'], // эти пути вызывают функции проверки в middleware
};
