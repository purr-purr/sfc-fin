import Accordion from '@modules/common/components/Accordion';
import DocumentsList from '@modules/common/components/DocumentsList';
import SplitBlocks from '@modules/common/components/SplitBlocks';
import {disclosureInformation,} from '@modules/home/components/Reports/data';
import {importDoc} from "@utils/formatters";

const Reports = () => {
	return (
		<SplitBlocks
			title="Вся необхідна документація"
			anchor="documentation"
		>
			<Accordion title="Ліцензія">
				<p><strong>ТОВ «СИСТЕМНИЙ ФІНАНСОВИЙ КОНСАЛТИНГ» </strong> надає
					фінансові послуги
					на
					підставі <a href={importDoc('1_Vytiag.pdf')} target="_blank"
					            rel="noreferrer">ліцензії на
						діяльність фінансової компанії</a>.</p>
				<br/>
				<p>Перелік фінансових послуг, які може надавати небанківська фінансова
					установа:</p>

				<ul>
					<li><p>надання коштів та банківських металів у кредит.</p></li>
				</ul>
			</Accordion>

			<Accordion title="Розкриття інформації">
				<DocumentsList list={disclosureInformation}/>
			</Accordion>
		</SplitBlocks>
	);
};

export default Reports;
