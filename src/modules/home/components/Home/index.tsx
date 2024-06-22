import Contacts from '@modules/home/components/Contacts';
import Intro from '@modules/home/components/Intro';
import Reports from '@modules/home/components/Reports';
import CalcBlock from '@modules/home/components/CalcBlock';
import About from '@modules/home/components/About';

const Home = () => {
	return (
		<>
			<Intro />
			<About />
			<CalcBlock />
			<Reports />
			<Contacts />
		</>
	);
};

export default Home;
