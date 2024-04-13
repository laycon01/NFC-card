'use client';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
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
import { cn } from '@/lib/utils';
import { CalendarCheckIcon, CheckCircle, KeyIcon, X } from 'lucide-react';
import React from 'react';
import { useMediaQuery } from 'usehooks-ts';

export default function AccessPass({
	fees,
	isCleared,
}: {
	fees: {
		name: string;
		isPaid: boolean;
		accountCheck: boolean;
		deanCheck: boolean;
		diaCheck: boolean;
		dvcCheck: boolean;
	}[];
	isCleared: boolean;
}) {
	const isDesktop = useMediaQuery('(min-width: 768px)');
	if (isDesktop) {
		return (
			<Dialog>
				<DialogTrigger asChild>
					<Button variant='outline'>
						<KeyIcon className='mr-2 h-4 w-4' />
						Access Pass
					</Button>
				</DialogTrigger>
				<DialogContent className='sm:max-w-[425px]'>
					<DialogHeader>
						<DialogTitle>Fees</DialogTitle>
						<DialogDescription>
							All fees must be paid and completely verified
							to gain access into the exam hall.
						</DialogDescription>
					</DialogHeader>
					<div className='grid gap-4 py-4 text-xs'>
						<div className='font-extrabold grid grid-cols-5 items-center gap-4'>
							<div className='col-span-2'>Fees</div>
							<div className='col-span-3 grid grid-cols-4 gap-2'>
								<div className=''>Account</div>
								<div className=''>Dean</div>
								<div className=''>DIA</div>
								<div className=''>DVC</div>
							</div>
						</div>
						{fees.map((a) => (
							<div
								key={a.name}
								className='grid grid-cols-5 items-center gap-4'
							>
								<div className='col-span-2 font-bold'>
									{a.name}
								</div>
								<div className='col-span-3 grid grid-cols-4'>
									<Checkbox
										id='accountant'
										checked={a.accountCheck}
										disabled
									/>
									<Checkbox
										id='dean'
										checked={a.deanCheck}
										disabled
									/>
									<Checkbox
										id='dia'
										checked={a.diaCheck}
										disabled
									/>
									<Checkbox
										id='dvc'
										checked={a.dvcCheck}
										disabled
									/>
								</div>
							</div>
						))}
					</div>
					<DialogFooter
						className={cn(
							'items-center justify-center',
							`${
								isCleared
									? 'text-emerald-700'
									: 'text-destructive'
							}`
						)}
					>
						{isCleared ? (
							<div className='flex flex-col items-center justify-center w-full'>
								<div className='text-3xl font-bold'>
									CLEARED
								</div>
								<CheckCircle className='h-20 w-20' />
							</div>
						) : (
							<div className='flex flex-col items-center justify-center w-full'>
								<div className='text-3xl font-bold'>
									OWING
								</div>
								<X className='h-20 w-20' />
							</div>
						)}
					</DialogFooter>
				</DialogContent>
			</Dialog>
		);
	}
	return (
		<Drawer>
			<DrawerTrigger asChild>
				<Button variant='outline'>
					<KeyIcon className='mr-2 h-4 w-4' />
					Access Pass
				</Button>
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader>
					<DrawerTitle>Fees</DrawerTitle>
					<DrawerDescription>
						All fees must be paid and completely verified to
						gain access into the exam hall.
					</DrawerDescription>
				</DrawerHeader>
				<div className='grid gap-4 p-4 text-xs'>
					<div className='font-extrabold grid grid-cols-5 items-center gap-4'>
						<div className='col-span-2'>Fees</div>
						<div className='col-span-3 grid grid-cols-4 gap-2'>
							<div className=''>Account</div>
							<div className=''>Dean</div>
							<div className=''>DIA</div>
							<div className=''>DVC</div>
						</div>
					</div>
					{fees.map((a) => (
						<div
							key={a.name}
							className='grid grid-cols-5 items-center gap-4'
						>
							<div className='col-span-2 font-bold'>
								{a.name}
							</div>
							<div className='col-span-3 grid grid-cols-4'>
								<Checkbox
									id='accountant'
									checked={a.accountCheck}
									disabled
								/>
								<Checkbox
									id='dean'
									checked={a.deanCheck}
									disabled
								/>
								<Checkbox
									id='dia'
									checked={a.diaCheck}
									disabled
								/>
								<Checkbox
									id='dvc'
									checked={a.dvcCheck}
									disabled
								/>
							</div>
						</div>
					))}
				</div>
				<DrawerFooter
					className={cn(
						'items-center justify-center',
						`${
							isCleared
								? 'text-emerald-700'
								: 'text-destructive'
						}`
					)}
				>
					{isCleared ? (
						<div className='flex flex-col items-center justify-center w-full'>
							<div className='text-3xl font-bold'>
								CLEARED
							</div>
							<CheckCircle className='h-20 w-20' />
						</div>
					) : (
						<div className='flex flex-col items-center justify-center w-full'>
							<div className='text-3xl font-bold'>
								OWING
							</div>
							<X className='h-20 w-20' />
						</div>
					)}
					<DrawerClose
						asChild
						className='grid w-full'
					>
						<Button>Close</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}
