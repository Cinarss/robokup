import Head from 'next/head';
import Hero from '../components/hero';
import Navbar from '../components/navbar';
import SectionTitle from '../components/sectionTitle';
import {
	activities,
	benefitOne,
	benefitTwo,
	features,
} from '../components/data';
import Benefits from '../components/benefits';
import Footer from '../components/footer';
import Cta from '../components/cta';
import Features from '../components/features';
import Activities from '../components/activities';

export default function Home() {
	return (
		<>
			<Head>
				<title>RoboKüp Tanıtım Sitesi</title>
				<meta name='description' content='Teambuilding app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Navbar />
			<Hero />
			<SectionTitle
				pretitle='Ana Özellikler'
				title=' Çözümümüzü neden kullanmalısınız?'>
				Roboküp Robotik Kodlama Eğitim Seti, hızlı ve kolay kurulum, dayanıklı ve güvenli tasarım, açık kaynak yazılım desteği ve yenilikçi eğitim platformuyla kodlama derslerinizi bir üst seviyeye taşıyor. 
			</SectionTitle>
			<Benefits data={benefitOne} />
			<Benefits imgPos='right' data={benefitTwo} />
			<SectionTitle pretitle='Ne Alacaksınız' title='Deneyimli Bir Ekip ♥'>
			Roboküp, hızlı kurulum ve dayanıklı tasarımıyla öne çıkan, açık kaynak yazılım desteği sunan yenilikçi bir eğitim platformudur. Her yaş için eğlenceli ve verimli bir kodlama deneyimi sunar. <br />
				<br />
			</SectionTitle>
			<Features data={features} />
			
			<Cta />
			<Footer />
		</>
	);
}
