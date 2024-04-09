import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
import { STUDENTS } from '@/lib/consts';
import { cn } from '@/lib/utils';
import { CalendarCheckIcon, CheckCircle, KeyIcon, X } from 'lucide-react';

export default function StudentSummaryPage({
	params,
}: {
	params: { matric: string };
}) {
	const student = STUDENTS.find(
		(student) => student['matric-number'] === params.matric
	);
	const isCleared = true;
	return (
		<Card className='w-full max-w-md mx-auto p-6'>
			<CardHeader className='flex flex-col items-center gap-5'>
				<div className='flex flex-col items-center'>
					<Avatar className='h-32 w-32'>
						<AvatarImage
							src={student?.image}
							alt={`Image for ${student?.name}`}
						/>
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					<CardTitle className='text-2xl'>
						{student?.name}
					</CardTitle>
				</div>
				<div className='text-sm flex flex-col items-center gap-3 rounded-xl shadow w-full overflow-clip'>
					<div className='flex justify-between w-full border-b p-2'>
						<div className='font-bold'>Matric Number:</div>
						<span>{student?.['matric-number']}</span>
					</div>
					<div className='flex justify-between w-full border-b p-2'>
						<div className='font-bold'>Session:</div>
						<span>{student?.session}</span>
					</div>
					<div className='flex justify-between w-full border-b p-2'>
						<div className='font-bold'>Faculty:</div>
						<span>{student?.faculty}</span>
					</div>
					<div className='flex justify-between w-full  border-b p-2'>
						<div className='font-bold'>Department:</div>
						<span>{student?.department}</span>
					</div>
					<div className='flex justify-between w-full  border-b p-2'>
						<div className='font-bold'>Level:</div>
						<span>{student?.level}</span>
					</div>
					<div className='flex justify-between w-full  border-b p-2'>
						<div className='font-bold'>Semester:</div>
						<span>{student?.semester} Semester</span>
					</div>
					<div className='flex justify-between w-full  border-b p-2'>
						<div className='font-bold'>Gender:</div>
						<span>{student?.gender}</span>
					</div>
				</div>
			</CardHeader>
			<CardContent className='flex flex-col space-y-4'>
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
								<DialogTitle>Fees</DialogTitle>
								<DialogDescription>
									All fees must be paid and
									completely verified to gain access
									into the exam hall.
								</DialogDescription>
							</DialogHeader>
							<div className='grid gap-4 py-4 text-xs'>
								<div className='font-extrabold grid grid-cols-5 items-center gap-4'>
									<div className='col-span-2'>
										Fees
									</div>
									<div className='col-span-3 grid grid-cols-4 gap-2'>
										<div className=''>
											Account
										</div>
										<div className=''>Dean</div>
										<div className=''>DIA</div>
										<div className=''>DVC</div>
									</div>
								</div>
								{student?.fees.map((a) => (
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
												checked={
													a.accountCheck
												}
												disabled
											/>
											<Checkbox
												id='dean'
												checked={
													a.deanCheck
												}
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
										student?.isCleared
											? 'text-emerald-700'
											: 'text-destructive'
									}`
								)}
							>
								{student?.isCleared ? (
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
								<DialogDescription>
									All
								</DialogDescription>
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
										{student?.attendance.map(
											(a) => (
												<tr
													key={a.course}
													className='hover:bg-blue-100'
												>
													<td className='py-2 px-2 border-b border-blue-500'>
														{a.course}
													</td>
													<td className='py-2 px-2 border-b border-blue-500'>
														{
															a.sessions
														}
													</td>
													<td className='py-2 px-2 border-b border-blue-500'>
														{
															a.attended
														}
													</td>
													<td className='py-2 px-2 border-b border-blue-500'>
														{(
															(a.attended /
																a.sessions) *
															100
														).toFixed(
															2
														)}
														%
													</td>
												</tr>
											)
										)}
									</tbody>
								</table>
							</div>
						</DialogContent>
					</Dialog>
				</div>
			</CardContent>
		</Card>
	);
}
