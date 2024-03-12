// this uses middleware protection
'use client'

import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { LucideLoader } from 'lucide-react'

const Settings = () => {
	const { isLoading } = useKindeBrowserClient()

	if (isLoading) {
		return <LucideLoader className='size-10 animate-spin text-neutral-500' />
	}

	return <h1 className='text-3xl'>Configurações</h1>
}

export default Settings
