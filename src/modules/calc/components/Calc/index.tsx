import {useState} from "react";
import type {ICalcRange} from "@modules/calc/types";
import CalcSliders from "@modules/calc/components/CalcSliders";
import cn from "classnames";
import Button from "@modules/common/components/Button";
import CalcConsequencesWarning
	from "@modules/calc/components/CalcConsequencesWarning";

import s from './Calc.module.scss';
import Registration from "@modules/registration/components/Registration";

const Calc = () => {
	const [isRetirementAge, setIsRetirementAge] = useState(false);
	const [isConsequencesWarningModal, setIsConsequencesWarningModal] = useState(false);

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
			default: [100, 400000],
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

			<CalcSliders ranges={loanConditions} isRetirementAge={isRetirementAge}/>

			<Button
				onClick={() => setIsConsequencesWarningModal(true)}
				type="text"
				text="Попередження про можливі наслідки згідно із законодавством України для споживачів у разі користування цією фінансовою послугою або невиконання ними обов’язків згідно з договором про споживчий кредит"
			/>

			<Registration/>

			<CalcConsequencesWarning
				isModalOpen={isConsequencesWarningModal}
				handleCloseModal={() => setIsConsequencesWarningModal(false)}
			/>
		</>
	);
};

export default Calc;
