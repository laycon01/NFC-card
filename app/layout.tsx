import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Navbar from '@/components/shared/navbar';

const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans',
});

export const metadata: Metadata = {
	title: 'The WAUU Multipurpose Student Card',
	description:
		'The West African Union University Student Card - Created by Ikumapayi Olamilekan John',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={cn(
					'min-h-screen bg-background font-sans antialiased isolate relative',
					fontSans.variable
				)}
			>
				{/* <Navbar /> */}
				{children}
			</body>
		</html>
	);
}
