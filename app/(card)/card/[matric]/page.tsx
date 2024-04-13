import AccessPass from '@/components/pages/card/access-pass';
import Attendance from '@/components/pages/card/attendance';
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
import { cn, getInitials } from '@/lib/utils';
import { CalendarCheckIcon, CheckCircle, KeyIcon, X } from 'lucide-react';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default function StudentSummaryPage({
	params,
}: {
	params: { matric: string };
}) {
	const student = STUDENTS.find(
		(student) => student['matric-number'] === params.matric
	);

	if (!student) return notFound();
	return (
		<div className='bg-yellow-400 h-[100svh]'>
			<div className='h-full w-full absolute'>
				<Image
					src='/wauu-logo.png'
					alt=''
					height={1080}
					width={1080}
					className='h-full w-full object-cover grayscale opacity-10'
				/>
			</div>
			<div className='p-5 relative'>
				<Card className='w-full max-w-md mx-auto p-2 flex flex-col gap-3'>
					<div className='flex flex-col items-center gap-3'>
						<div className='flex flex-col items-center'>
							<Avatar className='h-32 w-32'>
								<AvatarImage
									src={student?.image}
									alt={`Image for ${student?.name}`}
									className='object-cover '
								/>
								<AvatarFallback>
									{getInitials(student.name)}
								</AvatarFallback>
							</Avatar>
							<CardTitle className='text-2xl'>
								{student?.name}
							</CardTitle>
						</div>
						<div className='text-sm flex flex-col items-center gap-3 rounded-xl shadow w-full overflow-clip'>
							<div className='flex justify-between w-full border-b p-2'>
								<div className='font-bold'>
									Matric Number:
								</div>
								<span>
									{student?.['matric-number']}
								</span>
							</div>
							<div className='flex justify-between w-full border-b p-2'>
								<div className='font-bold'>
									Session:
								</div>
								<span>{student?.session}</span>
							</div>
							<div className='flex justify-between w-full border-b p-2'>
								<div className='font-bold'>
									Faculty:
								</div>
								<span>{student?.faculty}</span>
							</div>
							<div className='flex justify-between w-full  border-b p-2'>
								<div className='font-bold'>
									Department:
								</div>
								<span>{student?.department}</span>
							</div>
							<div className='flex justify-between w-full  border-b p-2'>
								<div className='font-bold'>Level:</div>
								<span>{student?.level}</span>
							</div>
							<div className='flex justify-between w-full  border-b p-2'>
								<div className='font-bold'>
									Semester:
								</div>
								<span>
									{student?.semester} Semester
								</span>
							</div>
							<div className='flex justify-between w-full  border-b p-2'>
								<div className='font-bold'>Gender:</div>
								<span>{student?.gender}</span>
							</div>
						</div>
					</div>
					<div className='flex flex-col space-y-4'>
						<div className='grid grid-cols-2 gap-4'>
							<AccessPass
								isCleared={student?.isCleared!}
								fees={student?.fees!}
							/>
							<Attendance
								attendance={student?.attendance}
							/>
						</div>
					</div>
				</Card>
			</div>
		</div>
	);
}
