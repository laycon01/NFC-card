import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Authentication',
	description: 'Auth Pages',
};

export default function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <div>{children}</div>;
}
