import {importDoc} from '@utils/formatters';
import {type IDocumentsList, IDocumentsListGroup} from '@utils/types';

export const financeReports: IDocumentsListGroup[] = [
	{
		groupTitle: '2023',
		list: [
			{
				title: 'Баланс (Звіт про фінансовий стан) на 31 березня 2023 р.',
				link: importDoc(''),
			}
		],
	},
	{
		groupTitle: '2022',
		list: [
			{
				title: 'Баланс (Звіт про фінансовий стан) на 31 грудня 2022 р.',
				link: importDoc(''),
			}
		],
	},
];

export const archivedInformation: IDocumentsList[] = [
	{
		title:
			'Правила надання коштів у позику, в тому числі і на умовах фінансового кредиту - Редакція, яка діяла до 14.06.2023 включно',
		link: importDoc(''),
	},
	{
		title:
			'Правила надання коштів у позику, в тому числі і на умовах фінансового кредиту - Редакція, яка діяла до 10.04.2024 включно',
		link: importDoc(''),
	}
];

export const auditReports: IDocumentsList[] = [
	{
		title: 'Звіт незалежного аудитора щодо фінансової звітності за 2020 рік',
		link: importDoc(''),
	},
	{
		title:
			'Незалежний звіт з надання впевненості щодо річних звітних даних за 2020 рік',
		link: importDoc(''),
	}
];
