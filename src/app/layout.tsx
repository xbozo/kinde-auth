import { Navbar } from '@/components/nav-bar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Kinde Auth',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='pt'>
			<body className={`${inter.className} bg-neutral-950 text-neutral-100 min-h-screen`}>
				<div className='border-b border-b-neutral-700'>
					<div className='p-4 min-h-[8vh] max-w-7xl mx-auto'>
						<Navbar />
					</div>
				</div>

				<div className='max-w-7xl mx-auto flex items-center justify-center mt-24 px-4'>
					{children}
				</div>
			</body>
		</html>
	)
}
