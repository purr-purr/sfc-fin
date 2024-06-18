import Contacts from '@modules/home/components/Contacts';
import Intro from '@modules/home/components/Intro';
import Reports from '@modules/home/components/Reports';
import ReportViolation from '@modules/home/components/ReportViolation';
import RightsProtection from '@modules/home/components/RightsProtection';

const Home = () => {
	return (
		<>
			<Intro/>
			<br/>
			<br/>
			<br/>
			<RightsProtection>
				<Reports/>
			</RightsProtection>

			<ReportViolation/>
			<Contacts/>
		</>
	);
};

export default Home;
