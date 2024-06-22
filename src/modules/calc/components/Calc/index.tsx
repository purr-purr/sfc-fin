import CalcData from '@modules/calc/components/CalcData';
import CalcResult from '@modules/calc/components/CalcResult';
import s from './Calc.module.scss';

const Calc = () => {
	return (
		<div className={s.container}>
			<CalcData />
			<CalcResult />
		</div>
	);
};

export default Calc;
