import {FC, useEffect} from 'react';
import type {IRegistrationStepProps,} from "@modules/registration/types";
import Button from "@modules/common/components/Button";
import s from './RegistrationStep4.module.scss';

const RegistrationStep4: FC<IRegistrationStepProps> = ({isDone}) => {
	const validationState = {
		confirmId: true,
	}

	useEffect(() => {
		const allValid = Object.values(validationState).every(Boolean);
		isDone(allValid);
		console.log(`validationState4`, validationState);
	}, [validationState, isDone]);

	return (
		<>
			<h5 className={s.title}>Оберіть спосіб підтвердження ідентифікаційних
				документів</h5>
			<div className={s.buttonGroup}>
				<Button text="BankID" type="light"/>
				<Button
					text="Завантажити документи"
					type="light"/>
			</div>
			<Button
				text="Інструкція щодо завантаження ідентифікаційних документів"
				type="text"/>
			<br/>
			<br/>
			<Button
				text="Інструкція з накладання КЕП"
				type="text"/>
		</>
	);
}

export default RegistrationStep4;
