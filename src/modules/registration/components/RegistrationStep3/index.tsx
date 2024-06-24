import {type ChangeEvent, FC, useEffect, useState} from 'react';
import Input from "@modules/common/components/Input";
import {validateDefault} from "@modules/registration/helpers";
import s from './RegistrationStep3.module.scss';
import type {
	IFormValues,
	IRegistrationStepProps,
	IValidationState
} from "@modules/registration/types";

const RegistrationStep3: FC<IRegistrationStepProps> = ({isDone}) => {
	const initFormValues: IFormValues = {
		cardNumber: '',
		cardHolder: '',
		cardExpirationDate: '',
	};

	const [formValues, setFormValues] = useState<IFormValues>(initFormValues);
	const [validationState, setValidationState] = useState<IValidationState>({
		cardNumber: false,
		cardHolder: false,
		cardExpirationDate: false,
	});

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const {name, value} = e.target;

		setFormValues((prevValues) => ({
			...prevValues,
			[name]: value,
		}));

		setValidationState((prevState) => ({
			...prevState,
			[name]: validateDefault(value),
		}));
	};

	useEffect(() => {
		const allValid = Object.values(validationState).every(Boolean);
		isDone(allValid);
		console.log(`validationState3`, validationState);
	}, [validationState, isDone]);

	const isValidInput = (name: string): boolean => {
		return !validationState[name] && formValues[name].length > 0;
	};

	return (
		<>
			<Input
				name="cardNumber"
				type="text"
				placeholder="xxxx xxxx xxxx xxxx"
				value={formValues.cardNumber}
				onChange={handleInputChange}
				label="Номер банківської карти, на яку будуть зараховані кредитні кошти"
				isInvalid={isValidInput('cardNumber')}
			/>

			<Input
				name="cardHolder"
				type="text"
				placeholder="CARD HOLDER"
				value={formValues.cardHolder}
				onChange={handleInputChange}
				label="Ім'я власника карти латинськими символами"
				isInvalid={isValidInput('cardHolder')}
			/>

			<Input
				name="cardExpirationDate"
				type="text"
				placeholder="мм/рр"
				value={formValues.cardExpirationDate}
				onChange={handleInputChange}
				label="Термін дії"
				isInvalid={isValidInput('cardExpirationDate')}
			/>

			<article className={s.alert}>
				<h5>Зверніть вашу увагу на наступне</h5>
				<p>Зазначаючи реквізити електронного платіжного засобу (платіжної
					картки) на цьому вебсайті для здійснення будь-якої дії, як-от
					авторизації/ідентифікації особи, заповнення відповідної реєстраційної
					форми (реєстрації на вебсайті), додавання платіжної картки в
					особистому кабінеті (активація/реєстрація платіжної картки), для
					безготівкового перерахування коштів на рахунок, списання коштів із
					рахунку (погашення кредиту), позичальник усвідомлює, <b>що ці
						реквізити
						зберігатимуться кредитодавцем</b> або особою, з якою в кредитодавця
					є
					договірні відносини, <b>та можуть використовуватися для списання
						коштів з
						рахунку для погашення вимог за договором про споживчий кредит.</b>
				</p><br/>
				<p>
					У разі настання такого списання позичальник має право в
					односторонньому порядку відмовитися або припинити списання коштів у
					визначеному договором порядку</p>
			</article>
		</>
	);
}

export default RegistrationStep3;
