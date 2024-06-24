import s from './CalcResult.module.scss';
import {FC} from "react";
import {calcXIRR, formatDate} from "@utils/formatters";

const CalcResult: FC<{
	duration: number,
	moneyAmount: number
}> = ({
	      duration, moneyAmount
      }) => {
	const addDays = (days: number) => {
		const currentDate = new Date();
		currentDate.setDate(currentDate.getDate() + days);
		return currentDate;
	}

	const amountOfInterest = () => {
		const result = moneyAmount * 0.75 * (duration / 365);
		return Number(result.toFixed(2));
	}

	function roundUpToDecimal(num: number) {
		let factor = Math.pow(10, 4);
		return Math.floor(num * factor) / factor;
	}

	const today = new Date();
	const currentDate = formatDate(today);
	const calcFinalDate = addDays(duration);
	const finalDate = formatDate(calcFinalDate as Date);
	const totalDebt = moneyAmount + amountOfInterest();
	const annualRate = 75;
	const dailyRate = roundUpToDecimal((75 / 365));
	const cashFlows = [-moneyAmount, totalDebt];
	const unixDates = [new Date().getTime() / 1000, calcFinalDate.getTime() / 1000];
	const xirrValue = calcXIRR(cashFlows, unixDates);

	return (
		<div className={s.container}>
			<h3 className={s.title}>Результат розрахунку відповідно до обраних
				умов</h3>
			<table className={s.table}>
				<tbody>
				<tr>
					<td>Сума кредиту, гривень</td>
					<td>{moneyAmount} грн</td>
				</tr>
				<tr>
					<td>Строк кредиту, днів.</td>
					<td>{duration} днів</td>
				</tr>
				<tr>
					<td>Дата видачі кредиту</td>
					<td>{currentDate}</td>
				</tr>
				<tr>
					<td>Кінцева дата повернення кредиту</td>
					<td>{finalDate}</td>
				</tr>
				<tr>
					<td>Строк кредитування, днів</td>
					<td>{duration} днів</td>
				</tr>
				<tr>
					<td>Річна процента ставка (тип ставки: фіксована)</td>
					<td>{annualRate}% річних</td>
				</tr>
				<tr>
					<td>Комісії</td>
					<td>- (відсутні)</td>
				</tr>
				<tr>
					<td>Реальна річна процентна ставка, відсотків річних</td>
					<td>{xirrValue}% річних</td>
				</tr>
				<tr>
					<td>Загальні витрати за споживчим кредитом, гривень</td>
					<td>{amountOfInterest()} грн</td>
				</tr>
				<tr>
					<td>Денна процентна ставка</td>
					<td>{dailyRate}%</td>
				</tr>
				<tr>
					<td>Суму платежу за розрахунковий період [включає платіж за кредитом,
						проценти за користування кредитом, розмір платежів за супровідні
						послуги фінансової установи, кредитного посередника (за наявності)
						та третіх осіб, гривень;
					</td>
					<td>Графік погашення: <br/>
						{finalDate} – {moneyAmount} грн (тіло кредиту); <br/>
						{finalDate} – {amountOfInterest()} грн (проценти). <br/> <br/>
						<hr/>
						<br/>
						Усього: {totalDebt} грн
					</td>
				</tr>
				<tr>
					<td>Загальна кількість платежів, уключаючи періодичність їх сплати
						та/або дати сплати.
					</td>
					<td>Одноразово 1 (один) платіж, в сумі {totalDebt} грн, в дату яка
						відповідає даті повернення кредиту ({finalDate})
					</td>
				</tr>
				<tr>
					<td>Загальна вартість кредиту, гривень</td>
					<td>{totalDebt} грн</td>
				</tr>
				<tr>
					<td>Перелік складових загальної вартості кредиту (згідно зі
						строковістю, зазначеною в договорі про споживчий кредиту розрізі сум
						і дат погашення основного боргу, сплати процентів за користування
						кредитом, вартості всіх супровідних послуг, кредитного посередника
						(за наявності) та третіх осіб за кожним платіжним періодом або
						гіперпосилання на графік платежів)
					</td>
					<td>
						{moneyAmount} грн – тіло кредиту;<br/>
						{amountOfInterest()} грн – проценти за користування кредитом.
					</td>
				</tr>
				</tbody>
			</table>
		</div>
	);
};

export default CalcResult;
