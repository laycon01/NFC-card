'use client';
import React, { useState } from 'react';
import { HoveredLink, Menu, MenuItem, ProductItem } from '../ui/navbar-menu';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar({ className }: { className?: string }) {
	const [active, setActive] = useState<string | null>(null);
	return (
		<div
			className={cn(
				'fixed top-2 inset-x-0 max-w-2xl mx-auto z-50',
				className
			)}
		>
			<Menu setActive={setActive}>
				<Link href={'/'}>
					<Image
						onMouseEnter={() => setActive(null)}
						src={'/wauu-logo.png'}
						alt=''
						height={100}
						width={100}
						className='h-20 w-20 '
					/>
				</Link>
				<MenuItem
					setActive={setActive}
					active={active}
					item='Student Portal'
				>
					<div className='flex flex-col space-y-4 text-sm'>
						<HoveredLink href='/student/dashboard'>
							Dashboard
						</HoveredLink>
						<HoveredLink href='/student/attendance'>
							Attendance
						</HoveredLink>
						<HoveredLink href='/student/profile'>
							Profile
						</HoveredLink>
						<HoveredLink href='/student/schedule'>
							Exam
						</HoveredLink>
					</div>
				</MenuItem>
				<MenuItem
					setActive={setActive}
					active={active}
					item='Admin Portal'
				>
					<div className='flex flex-col space-y-4 text-sm'>
						<HoveredLink href='/admin/dashboard'>
							Dashboard
						</HoveredLink>
						<HoveredLink href='/admin/attendance'>
							Attendance
						</HoveredLink>
						<HoveredLink href='/admin/exam-pass'>
							Exam Pass
						</HoveredLink>
						<HoveredLink href='/admin/fees'>Fees</HoveredLink>
						<HoveredLink href='/admin/reports'>
							Reports
						</HoveredLink>
						<HoveredLink href='/admin/student'>
							Students
						</HoveredLink>
					</div>
				</MenuItem>
				{/* <MenuItem
					setActive={setActive}
					active={active}
					item='Products'
				>
					<div className='  text-sm grid grid-cols-2 gap-10 p-4'>
						<ProductItem
							title='Algochurn'
							href='https://algochurn.com'
							src='https://assets.aceternity.com/demos/algochurn.webp'
							description='Prepare for tech interviews like never before.'
						/>
						<ProductItem
							title='Tailwind Master Kit'
							href='https://tailwindmasterkit.com'
							src='https://assets.aceternity.com/demos/tailwindmasterkit.webp'
							description='Production ready Tailwind css components for your next project'
						/>
						<ProductItem
							title='Moonbeam'
							href='https://gomoonbeam.com'
							src='https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png'
							description='Never write from scratch again. Go from idea to blog in minutes.'
						/>
						<ProductItem
							title='Rogue'
							href='https://userogue.com'
							src='https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png'
							description='Respond to government RFPs, RFIs and RFQs 10x faster using AI'
						/>
					</div>
				</MenuItem> */}
				<button
					onMouseEnter={() => setActive(null)}
					className='border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full'
				>
					<span>Login</span>
					<span className='absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px' />
				</button>
			</Menu>
		</div>
	);
}
