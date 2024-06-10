import React from 'react';
import Container from './container';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';

export default function Faq() {
	return (
		<Container className='!p-0'>
			<div className='w-full max-w-2xl p-2 mx-auto rounded-2xl'>
				{faqdata.map((item, index) => (
					<div key={item.question} className='mb-5'>
						<Disclosure>
							{({ open }) => (
								<>
									<Disclosure.Button className='flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200'>
										<span>{item.question}</span>
										<ChevronUpIcon
											className={`${
												open ? 'transform rotate-180' : ''
											} w-5 h-5 text-primaryPurple`}
										/>
									</Disclosure.Button>
									<Disclosure.Panel className='px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300'>
										{item.answer}
									</Disclosure.Panel>
								</>
							)}
						</Disclosure>
					</div>
				))}
			</div>
		</Container>
	);
}

const faqdata = [
	{
		question: 'Roboküp Nedir?',
		answer:
			'Roboküp, robotik kodlama dersleri ve meraklıları için geliştirilen bir eğitim setidir. Küp formundaki hücrelerden oluşan bu set, manyetik pogopinler sayesinde kablosuz olarak bağlanabilir ve bu da kurulum süresini kısaltarak elektronik komponentlerin zarar görmesini önler.',
	},
	{
		question:
			'Roboküp hangi seviyedeki öğrencilere uygundur?',
		answer:
			'Roboküp, hem temel eğitim seviyesindeki öğrencilere hem de ileri seviye kullanıcılara hitap etmektedir. Temel seviye için görsel kodlama materyalleri ve başlangıç seviyesi etkinlikler, ileri seviye için ise detaylı projeler ve açık kaynak kodlama araçları sunulmaktadır.',
	},
	{
		question:
			'Roboküp eğitim seti nasıl çalışır?',
		answer:
			"Roboküp, manyetik pogopinler sayesinde kablosuz olarak bağlanan küp formunda hücrelerden oluşur. Her hücre farklı sensörler içerir ve bu hücreler manyetik kuvvetle birleşerek elektriksel iletişimi sağlar. Kullanıcılar bu hücreleri birleştirerek çeşitli projeler gerçekleştirebilir.",
	},
	{
		question:
			'Is the app compatible with different devices and operating systems?',
		answer:
			'Yes, our team building app is designed to be compatible with various devices and operating systems. It is accessible via web browsers and offers dedicated mobile apps for both iOS and Android devices, ensuring a seamless user experience across different platforms.',
	},
	{
		question: 'Roboküp seti ile hangi projeleri yapabilirim?',
		answer:
			'Roboküp seti ile basit sensör uygulamalarından karmaşık robotik projelere kadar geniş bir yelpazede projeler yapabilirsiniz. Roboküp platformu, açık kaynak yazılımlar ve en popüler kodlama araçları ile desteklenmektedir, bu da kullanıcıların çeşitli projeler gerçekleştirmesine olanak tanır.',
	},
	{
		question:
			"Roboküp'ün avantajları nelerdir?",
		answer:
			"Roboküp, kurulum süresini kısaltan ve elektronik komponentlerin zarar görme riskini azaltan manyetik pogopin teknolojisi ile diğer eğitim setlerinden ayrılmaktadır. Ayrıca, açık kaynak kodlama desteği ve geniş sensör yelpazesi ile kullanıcılarına büyük esneklik sunar.",
	},
	{
		question:
			'Roboküp nasıl yenilikçi bir çözümdür?',
		answer:
			'Roboküp, manyetik pogopin bağlantıları ve küp formundaki hücre tasarımı ile robotik kodlama eğitimine yenilikçi bir yaklaşım getirmektedir. Ayrıca, açık kaynak yazılım desteği ve internet tabanlı eğitim platformu ile kullanıcılarına kapsamlı bir öğrenme deneyimi sunar.',
	},
	
];
