import React from 'react';
import {
	CalendarCheckIcon,
	DatabaseIcon,
	ShieldCheckIcon,
	UsersIcon,
} from 'lucide-react';

export default function WhyWauu() {
	return (
		<section className='w-full py-12 md:py-24 lg:py-32'>
			<div className='container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12'>
				<div className='space-y-4 text-center lg:order-last lg:text-left'>
					<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/line-tight lg:text-6xl/line-tight/tracked'>
						Why Use the Wauu Card?
					</h2>
					<p className='text-gray-500 md:text-xl lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
						The Wauu Card revolutionizes traditional student
						IDs, bringing convenience, efficiency, and
						security to your campus. Say goodbye to lost
						cards, outdated attendance systems, and scattered
						student information. With the Wauu Card, students
						tap into a seamless experience where their
						essential data is always a tap away. Schools
						benefit from streamlined attendance tracking,
						centralized student management, and enhanced
						security for exam access. Embrace the future of
						campus management – embrace the Wauu Card.
					</p>
				</div>
				<div className='grid gap-6 md:gap-8 lg:grid-cols-2 lg:gap-12'>
					<div className='flex flex-col items-center gap-2'>
						<CalendarCheckIcon className='w-12 h-12 rounded-full border border-gray-200 p-3 grid place-items-center text-2xl text-gray-500 dark:border-gray-800 dark:text-gray-400' />
						<div className='space-y-2 text-center'>
							<h3 className='text-xl font-bold tracking-tighter'>
								Efficient Attendance
							</h3>
							<p className='text-gray-500 text-sm/relaxed mx-auto max-w-[400px] dark:text-gray-400'>
								Track attendance with a simple tap
							</p>
						</div>
					</div>
					<div className='flex flex-col items-center gap-2'>
						<ShieldCheckIcon className='w-12 h-12 rounded-full border border-gray-200 p-3 grid place-items-center text-2xl text-gray-500 dark:border-gray-800 dark:text-gray-400' />
						<div className='space-y-2 text-center'>
							<h3 className='text-xl font-bold tracking-tighter'>
								Secure Exam Access
							</h3>
							<p className='text-gray-500 text-sm/relaxed mx-auto max-w-[400px] dark:text-gray-400'>
								NFC-enabled exam passes for secure entry
							</p>
						</div>
					</div>
					<div className='flex flex-col items-center gap-2'>
						<DatabaseIcon className='w-12 h-12 rounded-full border border-gray-200 p-3 grid place-items-center text-2xl text-gray-500 dark:border-gray-800 dark:text-gray-400' />
						<div className='space-y-2 text-center'>
							<h3 className='text-xl font-bold tracking-tighter'>
								Centralized Student Data
							</h3>
							<p className='text-gray-500 text-sm/relaxed mx-auto max-w-[400px] dark:text-gray-400'>
								Manage all student information in one
								place
							</p>
						</div>
					</div>
					<div className='flex flex-col items-center gap-2'>
						<UsersIcon className='w-12 h-12 rounded-full border border-gray-200 p-3 grid place-items-center text-2xl text-gray-500 dark:border-gray-800 dark:text-gray-400' />
						<div className='space-y-2 text-center'>
							<h3 className='text-xl font-bold tracking-tighter'>
								User-Friendly Interface
							</h3>
							<p className='text-gray-500 text-sm/relaxed mx-auto max-w-[400px] dark:text-gray-400'>
								Easy for students and administrators
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
