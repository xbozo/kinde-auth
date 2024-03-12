import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
	const { getUser } = getKindeServerSession()
	const user = await getUser()

	if (!user) {
		return NextResponse.redirect(
			new URL('/api/auth/login?post_login_redirect_url=/settings', request.url)
		)
	}

	return NextResponse.next()
}

export const config = {
	matcher: '/settings',
}
