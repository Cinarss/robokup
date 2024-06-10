import {
	ViewListIcon,
	DeviceMobileIcon,
	AdjustmentsIcon,
	SunIcon,
	DocumentDownloadIcon,
	HeartIcon,
	CloudIcon,
	GlobeIcon,
	ChatIcon,
	CheckCircleIcon,
	MoonIcon,
} from '@heroicons/react/outline';

import benefitOneImg from '../public/img/kupYapi.png';
import benefitTwoImg from '../public/img/robocar.png';


const benefitOne = {
	title: 'Size Neler Sunuyoruz?',
	desc: 'Roboküp Robotik Kodlama Eğitim Seti ile hızlı kurulum, dayanıklı tasarım, açık kaynak yazılım desteği ve yenilikçi bir eğitim platformu sunuyoruz. Eğlenceli ve verimli bir kodlama deneyimi yaşayın.',
	image: benefitOneImg,
	bullets: [
		{
			title: 'Hızlı ve Kolay Kurulum',
			desc: ' Manyetik pogopin teknolojisi ile kablolama zahmetini ortadan kaldırın.',
			icon: <ViewListIcon />,
		},
		{
			title: 'Dayanıklı ve Güvenli',
			desc: 'Küp formundaki hücreler, elektronik bileşenlerin zarar görmesini önler',
			icon: <DeviceMobileIcon />,
		},
		{
			title: 'Yenilikçi Tasarım:',
			desc: 'Manyetik birleşme ve pogopin bağlantısı ile yenilikçi bir eğitim seti sunar',
			icon: <SunIcon />,
		},
	],
};

const benefitTwo = {
	title: 'Ne Amaçlıyoruz?',
	desc: 'Roboküp, robotik kodlama tutkunları için pratik ve yenilikçi bir eğitim seti. Kurulum kolaylığı ve güvenli tasarımıyla öne çıkıyor.',
	image: benefitTwoImg,
	bullets: [
		{
			title: 'Açık Kaynak Yazılım Desteği',
			desc: 'Roboküp, açık kaynak yazılımları destekleyerek geniş bir uygulama yelpazesi sunar.',
			icon: <DocumentDownloadIcon />,
		},
		{
			title: 'Eğitim Platformu',
			desc: 'İnternet tabanlı eğitim platformumuz, çeşitli projeler, görseller ve teknik bilgiler sunar',
			icon: <AdjustmentsIcon />,
		},
		{
			title: 'Yerel Üretim Desteği:',
			desc: 'Yerli üretime uygun tasarımı ve 3D baskı desteği ile Roboküp, maliyetleri düşürür ve üretim sürecini kolaylaştırır.',
			icon: <HeartIcon />,
		},
	],
};

export { benefitOne, benefitTwo };

const features = [
	{
		title: 'Hızlı Kurulum',
		description: '',
		icon: <CloudIcon />,
	},
	{
		title: 'Dayanıklı Tasarım',
		description:
			'',
		icon: <GlobeIcon />,
	},
	{
		title: 'Açık kaynak yazılım desteği',
		description: '',
		icon: <DeviceMobileIcon />,
	},
	{
		title: 'Yenilikçi eğitim platformu',
		description: '',
		icon: <GlobeIcon />,
	},
	
];

export { features };


