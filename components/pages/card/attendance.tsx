'use client';
import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from '@/components/ui/drawer';
import { CalendarCheckIcon } from 'lucide-react';
import React from 'react';
import { useMediaQuery } from 'usehooks-ts';

export default function Attendance({
	attendance,
}: {
	attendance?: {
		course: string;
		sessions: number;
		attended: number;
	}[];
}) {
	const isDesktop = useMediaQuery('(min-width: 768px)');
	if (isDesktop) {
		return (
			<Dialog>
				<DialogTrigger asChild>
					<Button variant='outline'>
						<CalendarCheckIcon className='mr-2 h-4 w-4' />
						Attendance
					</Button>
				</DialogTrigger>
				<DialogContent className='sm:max-w-[425px]'>
					<DialogHeader>
						<DialogTitle>Attendance</DialogTitle>
						<DialogDescription>All</DialogDescription>
					</DialogHeader>
					<div className='grid gap-4 py-4'>
						<table className='text-left w-full border-collapse'>
							<thead>
								<tr className='bg-[#007bff] text-white'>
									<th className='py-2 px-2 bg-blue-600 border-b border-blue-500'>
										Course Code
									</th>
									<th className='py-2 px-2 bg-blue-600 border-b border-blue-500'>
										Sessions
									</th>
									<th className='py-2 px-2 bg-blue-600 border-b border-blue-500'>
										Attended
									</th>
									<th className='py-2 px-2 bg-blue-600 border-b border-blue-500'>
										Attendance
									</th>
								</tr>
							</thead>
							<tbody>
								{(attendance ?? []).map((a) => (
									<tr
										key={a.course}
										className='hover:bg-blue-100'
									>
										<td className='py-2 px-2 border-b border-blue-500'>
											{a.course}
										</td>
										<td className='py-2 px-2 border-b border-blue-500'>
											{a.sessions}
										</td>
										<td className='py-2 px-2 border-b border-blue-500'>
											{a.attended}
										</td>
										<td className='py-2 px-2 border-b border-blue-500'>
											{(
												(a.attended /
													a.sessions) *
												100
											).toFixed(2)}
											%
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</DialogContent>
			</Dialog>
		);
	}
	return (
		<Drawer>
			<DrawerTrigger asChild>
				<Button variant='outline'>
					<CalendarCheckIcon className='mr-2 h-4 w-4' />
					Attendance
				</Button>
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader>
					<DrawerTitle>Attendance</DrawerTitle>
					<DrawerDescription>All</DrawerDescription>
				</DrawerHeader>
				<div className='grid gap-4 p-4'>
					<table className='text-left w-full border-collapse'>
						<thead>
							<tr className='bg-yellow-600  text-white'>
								<th className='py-2 px-2 bg-blue-600 border-b border-blue-500'>
									Course Code
								</th>
								<th className='py-2 px-2 bg-blue-600 border-b border-blue-500'>
									Sessions
								</th>
								<th className='py-2 px-2 bg-blue-600 border-b border-blue-500'>
									Attended
								</th>
								<th className='py-2 px-2 bg-blue-600 border-b border-blue-500'>
									Attendance
								</th>
							</tr>
						</thead>
						<tbody>
							{(attendance ?? []).map((a) => (
								<tr
									key={a.course}
									className='hover:bg-blue-100'
								>
									<td className='py-2 px-2 border-b border-blue-500'>
										{a.course}
									</td>
									<td className='py-2 px-2 border-b border-blue-500'>
										{a.sessions}
									</td>
									<td className='py-2 px-2 border-b border-blue-500'>
										{a.attended}
									</td>
									<td className='py-2 px-2 border-b border-blue-500'>
										{(
											(a.attended /
												a.sessions) *
											100
										).toFixed(2)}
										%
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<DrawerFooter>
					<DrawerClose
						asChild
						className='grid'
					>
						<Button>Close</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}
