import Accordion from '@modules/common/components/Accordion';
import DocumentsList from '@modules/common/components/DocumentsList';
import SplitBlocks from '@modules/common/components/SplitBlocks';
import {
	archivedInformation,
	auditReports,
	financeReports,
} from '@modules/home/components/Reports/data';

const Reports = () => {
	return (
		<SplitBlocks
			title="Вся необхідна документація"
			anchor="documentation"
		>
			<Accordion title="Аудиторські висновки">
				<DocumentsList list={auditReports}/>
			</Accordion>

			<Accordion title="Фінансова звітність">
				<DocumentsList groupList={financeReports}/>
			</Accordion>

			<Accordion title="Архівна інформація">
				<DocumentsList list={archivedInformation}/>
			</Accordion>
		</SplitBlocks>
	);
};

export default Reports;
