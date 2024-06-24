import {FC, useState} from 'react';

import s from './CalcSliders.module.scss';
import Slider from '@mui/material/Slider';
import type {ICalcRange} from '@modules/calc/types';
import CalcResult from "@modules/calc/components/CalcResult";

const CalcSliders: FC<{
	ranges: ICalcRange;
	isRetirementAge: boolean;
}> = ({ranges, isRetirementAge}) => {
	const [moneyAmount, setMoneyAmount] = useState<number>(1000);
	const [duration, setDuration] = useState<number>(1);

	const moneyRange = isRetirementAge
		? ranges.money.retirement
		: ranges.money.default;
	const durationRange = isRetirementAge
		? ranges.duration.retirement
		: ranges.duration.default;

	return (
		<>
			<ul className={s.container}>
				<li>
					<p className={s.title}>Взяти {moneyAmount} грн.</p>
					<Slider
						aria-label="money"
						defaultValue={500}
						onChange={(event, value) => setMoneyAmount(value as number)}
						step={500}
						min={500}
						max={moneyRange[1]}
					/>
					<p className={s.range}>
						<span>{moneyRange[0]} грн.</span>
						<span>{moneyRange[1]} грн.</span>
					</p>
				</li>

				<li>
					<p className={s.title}>на {duration} дн.</p>
					<Slider
						aria-label="duration"
						defaultValue={1}
						onChange={(event, value) => setDuration(value as number)}
						step={1}
						min={durationRange[0]}
						max={durationRange[1]}
					/>
					<p className={s.range}>
						<span>{durationRange[0]} день</span>
						<span>{durationRange[1]} днів</span>
					</p>
				</li>
			</ul>

			<CalcResult moneyAmount={moneyAmount} duration={duration}/>
		</>
	);
};

export default CalcSliders;
