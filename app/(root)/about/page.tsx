import { CardStack } from '@/components/ui/card-stack';
import { CARDS } from '@/constants';
import React from 'react';

export default function AboutPage() {
	return (
		<div className='h-[40rem] flex items-center justify-center w-full'>
			<CardStack items={CARDS} />
		</div>
	);
}
