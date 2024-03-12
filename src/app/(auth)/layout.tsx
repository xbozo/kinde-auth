import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'

const AuthLayout = async ({ children }: { children: ReactNode }) => {
	const { getUser } = getKindeServerSession()
	const user = await getUser()

	if (!user) {
		return redirect('/api/auth/login')
	}

	return <>{children}</>
}

export default AuthLayout
