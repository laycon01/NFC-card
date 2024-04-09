import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { CalendarCheckIcon, KeyIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function StudentSummaryPage({
	params,
}: {
	params: { matric: string };
}) {
	return (
		<Card className='w-full max-w-md mx-auto p-6'>
			<CardHeader className='flex flex-col items-center space-y-2'>
				<Avatar className='h-32 w-32'>
					<AvatarImage
						src='https://github.com/shadcn.png'
						alt='@shadcn'
					/>
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
				<CardTitle className='text-2xl'>Mia Brown</CardTitle>
				<CardDescription className='text-sm flex flex-col'>
					Student ID: 1234567890
					<span className=''>
						Matric Number ID: {params.matric}
					</span>
				</CardDescription>
			</CardHeader>
			<CardContent className='flex flex-col space-y-4'>
				<div className='w-full flex justify-center'>
					<div />
				</div>
				<div className='grid grid-cols-2 gap-4'>
					<Dialog>
						<DialogTrigger asChild>
							<Button variant='outline'>
								<KeyIcon className='mr-2 h-4 w-4' />
								Access Pass
							</Button>
						</DialogTrigger>
						<DialogContent className='sm:max-w-[425px]'>
							<DialogHeader>
								<DialogTitle>Edit profile</DialogTitle>
								<DialogDescription>
									Make changes to your profile here.
									Click save when you&apos;re done.
								</DialogDescription>
							</DialogHeader>
							<div className='grid gap-4 py-4'>
								<div className='grid grid-cols-4 items-center gap-4'>
									<Label
										htmlFor='name'
										className='text-right'
									>
										Name
									</Label>
									<Input
										id='name'
										defaultValue='Pedro Duarte'
										className='col-span-3'
									/>
								</div>
								<div className='grid grid-cols-4 items-center gap-4'>
									<Label
										htmlFor='username'
										className='text-right'
									>
										Username
									</Label>
									<Input
										id='username'
										defaultValue='@peduarte'
										className='col-span-3'
									/>
								</div>
							</div>
							<DialogFooter>
								<Button type='submit'>
									Save changes
								</Button>
							</DialogFooter>
						</DialogContent>
					</Dialog>
					<Dialog>
						<DialogTrigger asChild>
							<Button variant='outline'>
								<CalendarCheckIcon className='mr-2 h-4 w-4' />
								Attendance
							</Button>
						</DialogTrigger>
						<DialogContent className='sm:max-w-[425px]'>
							<DialogHeader>
								<DialogTitle>Edit profile</DialogTitle>
								<DialogDescription>
									Make changes to your profile here.
									Click save when you&apos;re done.
								</DialogDescription>
							</DialogHeader>
							<div className='grid gap-4 py-4'>
								<div className='grid grid-cols-4 items-center gap-4'>
									<Label
										htmlFor='name'
										className='text-right'
									>
										Name
									</Label>
									<Input
										id='name'
										defaultValue='Pedro Duarte'
										className='col-span-3'
									/>
								</div>
								<div className='grid grid-cols-4 items-center gap-4'>
									<Label
										htmlFor='username'
										className='text-right'
									>
										Username
									</Label>
									<Input
										id='username'
										defaultValue='@peduarte'
										className='col-span-3'
									/>
								</div>
							</div>
							<DialogFooter>
								<Button type='submit'>
									Save changes
								</Button>
							</DialogFooter>
						</DialogContent>
					</Dialog>
					<Dialog>
						<DialogTrigger asChild>
							<Button variant='outline'>
								<CalendarCheckIcon className='mr-2 h-4 w-4' />
								Attendance
							</Button>
						</DialogTrigger>
						<DialogContent className='sm:max-w-[425px]'>
							<DialogHeader>
								<DialogTitle>Edit profile</DialogTitle>
								<DialogDescription>
									Make changes to your profile here.
									Click save when you&apos;re done.
								</DialogDescription>
							</DialogHeader>
							<div className='grid gap-4 py-4'>
								<div className='grid grid-cols-4 items-center gap-4'>
									<Label
										htmlFor='name'
										className='text-right'
									>
										Name
									</Label>
									<Input
										id='name'
										defaultValue='Pedro Duarte'
										className='col-span-3'
									/>
								</div>
								<div className='grid grid-cols-4 items-center gap-4'>
									<Label
										htmlFor='username'
										className='text-right'
									>
										Username
									</Label>
									<Input
										id='username'
										defaultValue='@peduarte'
										className='col-span-3'
									/>
								</div>
							</div>
							<DialogFooter>
								<Button type='submit'>
									Save changes
								</Button>
							</DialogFooter>
						</DialogContent>
					</Dialog>
				</div>
			</CardContent>
		</Card>
	);
}
