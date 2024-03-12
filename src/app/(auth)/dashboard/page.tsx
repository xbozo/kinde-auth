import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

const Dashboard = async () => {
	const { getUser } = getKindeServerSession()
	const user = await getUser()

	console.log(user)

	return (
		<div className='flex flex-col items-center justify-center'>
			<p className='text-xl'>Olá {user?.given_name}, esse é seu dashboard.</p>
		</div>
	)
}

export default Dashboard
