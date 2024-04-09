import WhyWauu from '@/components/pages/home/why-wauu';
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
	return (
		<div className='overflow-clip grid'>
			<BackgroundGradientAnimation>
				<div className='absolute z-50 inset-0 flex flex-col items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl'>
					<p className='bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20'>
						The WAUU Card
					</p>
					<p className='bg-clip-text text-transparent drop-shadow-2xl text-xl md:text-2xl lg:text-3xl bg-gradient-to-b from-white/80 to-white/20'>
						The Future of Student IDs is Here
					</p>
					<p className='text-lg max-w-2xl mt-10'>
						A secure, efficient platform for attendance, exam
						passes, student data, and more – powered by
						tap-and-go NFC cards.
					</p>
					<Button className='mt-10'>
						<Link href='/sign-in'>Sign In</Link>
					</Button>
				</div>
			</BackgroundGradientAnimation>
			<WhyWauu />
		</div>
	);
}
