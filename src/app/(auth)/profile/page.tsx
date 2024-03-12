'use client'

import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { LucideLoader } from 'lucide-react'

const Profile = () => {
	const { isLoading } = useKindeBrowserClient()

	if (isLoading) {
		return <LucideLoader className='size-10 animate-spin text-neutral-500' />
	}

	return <h1 className='text-3xl'>Profile Page</h1>
}

export default Profile
