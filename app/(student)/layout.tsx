import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Student',
	description: 'Student Pages',
};

export default function StudentLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <div>{children}</div>;
}
