import s from './Intro.module.scss';
import Button from '@modules/common/components/Button';

const Intro = () => {
	const scrollToElement = () => {
		const targetElement = document.getElementById('calc');
		if (targetElement) {
			targetElement.scrollIntoView({behavior: 'smooth'});
		}
	};

	return (
		<section className={s.container}>
			<article className={s.info}>
				<h1 className={s.infoTitle}>
					Майбутнє фінансів <br/> починається з нами
				</h1>
				<p className={s.infoDesc}>
					ТОВ &quot;Системний Фінансовий Консалтинг&quot; пропонує безпечні та
					ефективні фінансові рішення для вашого добробуту.
				</p>

				<div className={s.buttonsGroup}>
					<Button text="Розрахувати кредит" onClick={scrollToElement}/>
				</div>
			</article>
		</section>
	);
};

export default Intro;
