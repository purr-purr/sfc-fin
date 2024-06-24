import s from './CalcBlock.module.scss';
import InnerFrame from '@modules/common/components/InnerFrame';
import Calc from '@modules/calc/components/Calc';

const CalcBlock = () => {
	return (
		<InnerFrame id="calc" className={s.container}>
			<h2 className={s.title}>Калькулятор споживчого кредиту</h2>
			<Calc/>
		</InnerFrame>
	);
};

export default CalcBlock;
