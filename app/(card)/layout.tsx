import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Card',
	description: 'Card Pages',
};

export default function AdminLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <div>{children}</div>;
}
