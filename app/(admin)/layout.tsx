import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Admin',
	description: 'Admin Pages',
};

export default function AdminLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <div>{children}</div>;
}
