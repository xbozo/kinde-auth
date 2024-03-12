import { LoginLink, LogoutLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/components'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import Image from 'next/image'
import Link from 'next/link'

export const Navbar = async () => {
	const { getUser, isAuthenticated } = getKindeServerSession()
	const user = await getUser()

	return (
		<nav className='flex items-center justify-center'>
			<div className='container flex items-center justify-between'>
				<Link href='/'>
					<Image
						src='/white-clown-logo-svg.svg'
						alt='Logo'
						height={70}
						width={70}
					/>
				</Link>
			</div>

			<div className='flex items-center gap-x-5'>
				<Link href='/dashboard'>
					<h1 className='text-xl  hover:text-neutral-300'>Dashboard</h1>
				</Link>

				<Link href='/profile'>
					<h1 className='text-xl hover:text-neutral-300'>Perfil</h1>
				</Link>

				<Link href='/settings'>
					<h1 className='text-xl hover:text-neutral-300'>Configurações</h1>
				</Link>

				{(await isAuthenticated()) ? (
					<>
						<LogoutLink>
							<button className='w-[100px] bg-neutral-200 text-neutral-950 p-2 rounded-md text-center'>
								Sair
							</button>
						</LogoutLink>
					</>
				) : (
					<>
						<div className='flex items-center gap-x-3'>
							<LoginLink postLoginRedirectURL='/dashboard'>
								<button className='w-[100px] bg-neutral-200 text-neutral-950 p-2 rounded-md text-center'>
									Entrar
								</button>
							</LoginLink>

							<RegisterLink postLoginRedirectURL='/dashboard'>
								<button className='w-[100px] bg-neutral-200 text-neutral-950 p-2 rounded-md text-center'>
									Cadastrar
								</button>
							</RegisterLink>
						</div>
					</>
				)}
			</div>
		</nav>
	)
}
