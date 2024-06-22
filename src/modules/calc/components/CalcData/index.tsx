import s from './CalcData.module.scss';
import { useState } from 'react';
import cn from 'classnames';
import CalcSliders from '@modules/calc/components/CalcSliders';
import type { ICalcRange } from '@modules/calc/types';

const CalcData = () => {
	const [isRetirementAge, setIsRetirementAge] = useState(false);
	const ageRestrictions = [
		{
			title: 'Для споживачів віком від 18 до 69 років:',
			restrictions: [
				'максимальна сума кредиту 400 000 грн;',
				'максимальний строк кредитування – 60 днів.',
			],
		},
		{
			title: 'Для споживачів віком від 69 до 75 років:',
			restrictions: [
				'максимальна сума кредиту 3 000 грн;',
				'максимальний строк кредитування – 30 днів.',
			],
		},
	];

	const loanConditions: ICalcRange = {
		money: {
			default: [500, 400000],
			retirement: [100, 3000],
		},
		duration: {
			default: [1, 60],
			retirement: [1, 30],
		},
	};

	return (
		<>
			<h3 className={s.ageTitle}>
				Оберіть вік споживача (фізична особа - громадянин України) споживчого
				кредитування
			</h3>

			<div className={cn(s.tabs, !isRetirementAge && s.activeRight)}>
				<button
					className={cn(s.tab, !isRetirementAge && s.active)}
					onClick={() => setIsRetirementAge(false)}
				>
					Віком від 18 до 69 років
				</button>

				<button
					className={cn(s.tab, isRetirementAge && s.active)}
					onClick={() => setIsRetirementAge(true)}
				>
					Віком від 69 до 75 років
				</button>
			</div>

			<div className={s.ageRules}>
				{ageRestrictions.map((item) => (
					<div key={item.title} className={s.ageRulesItem}>
						<p>{item.title}</p>
						<ul>
							{item.restrictions.map((listItemClasses) => (
								<li key={listItemClasses}>- {listItemClasses}</li>
							))}
						</ul>
					</div>
				))}
			</div>

			<CalcSliders ranges={loanConditions} isRetirementAge={isRetirementAge} />

			{isRetirementAge ? <div>after 69</div> : <div>before 69</div>}
		</>
	);
};

export default CalcData;
