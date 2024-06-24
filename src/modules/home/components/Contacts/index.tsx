import Link from 'next/link';

import {
	COMPANY_ADDRESS,
	COMPANY_EDRPOU,
	COMPANY_EMAIL,
	COMPANY_MAP_LINK,
	COMPANY_PHONE,
} from '@utils/const';

import s from './Contacts.module.scss';
import SplitBlocks from '@modules/common/components/SplitBlocks';

interface IContactItem {
	title: string;
	desc: string;
	link?: string;
}

const Contacts = () => {
	const contactsList: IContactItem[] = [
		{
			title: 'Адреса',
			desc: COMPANY_ADDRESS,
		},
		{
			title: 'Електронна Пошта',
			desc: COMPANY_EMAIL,
			link: `mailto:${COMPANY_EMAIL}`,
		},
		{
			title: 'Телефон',
			desc: COMPANY_PHONE,
			link: `tel:${COMPANY_PHONE}`,
		},
		{
			title: 'ЄДРПОУ',
			desc: COMPANY_EDRPOU,
		}
	];

	return (
		<section className={s.container} id="contacts">
			<SplitBlocks
				title="Зв'яжіться з нами або завітайте особисто"
				anchor="contacts"
				className={s.inner}
			>
				<ul className={s.contacts}>
					{contactsList.map((item) => (
						<li key={item.title} className={s.contactsInner}>
							<dl>
								<dt>{item.title}</dt>
								<dd>
									{item.link ? (
										<Link href={item.link} target="_blank">
											{item.desc}
										</Link>
									) : (
										item.desc
									)}
								</dd>
							</dl>
						</li>
					))}
				</ul>
			</SplitBlocks>

			<div className={s.map}>
				<iframe
					className={s.mapFrame}
					src={COMPANY_MAP_LINK}
					allowFullScreen={true}
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				/>
			</div>
		</section>
	);
};

export default Contacts;
