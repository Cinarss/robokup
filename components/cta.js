import React from 'react';
import Container from './container';

export default function Cta() {
	return (
		<Container>
			<div className='flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-primaryPurple px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl'>
				<div className='flex-grow text-center lg:text-left'>
					<h2 className='text-2xl font-medium lg:text-3xl'>
						Kendi Projeni Oluşturmaya Başla
					</h2>
					<p className='mt-2 font-medium text-white text-opacity-90 lg:text-xl'>
						Hayalindeki projeyi oluşturmak için bize katılın ve eğlenin.
					</p>
				</div>
				<div className='flex-shrink-0 w-full text-center lg:w-auto'>
					<a
						href='mailto:fatihshv@gmail.com'
						rel='noopener'
						className='inline-block py-3 mx-auto text-lg font-medium text-center text-primaryPurple bg-white rounded-md px-7 lg:px-10 lg:py-5 '>
						EĞLENCEYE KATILIN
					</a>
				</div>
			</div>
		</Container>
	);
}
