import {type ChangeEvent, FC, useEffect, useState} from 'react';
import Input from "@modules/common/components/Input";
import Checkbox from "@modules/common/components/Checkbox";
import {
	validateConfirmPassword,
	validateDefault,
	validateEmail,
	validatePassword,
	validatePhone
} from "@modules/registration/helpers";
import type {
	IFormValues,
	IRegistrationStepProps,
	IValidationState
} from "@modules/registration/types";

const RegistrationStep1: FC<IRegistrationStepProps> = ({isDone}) => {
	const initFormValues: IFormValues = {
		lastname: '',
		firstname: '',
		middlename: '',
		dateOfBirth: '',
		phone: '',
		email: '',
		password: '',
		confirmPassword: '',
		dataProcessing: '',
		offersAgreement: '',
	};

	const [formValues, setFormValues] = useState<IFormValues>(initFormValues);
	const [validationState, setValidationState] = useState<IValidationState>({
		lastname: false,
		firstname: false,
		middlename: false,
		dateOfBirth: false,
		phone: false,
		email: false,
		password: false,
		confirmPassword: false,
		dataProcessing: false,
		offersAgreement: false,
	});

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const {name, value} = e.target;

		setFormValues((prevValues) => ({
			...prevValues,
			[name as string]: value,
		}));

		if (name === 'password') {
			setValidationState((prevState) => ({
				...prevState,
				[name]: validatePassword(value),
			}));
		} else if (name === 'confirmPassword') {
			setValidationState((prevState) => ({
				...prevState,
				[name]: validateConfirmPassword(value, formValues.password),
			}));
		} else if (name === 'phone') {
			setValidationState((prevState) => ({
				...prevState,
				[name]: validatePhone(value),
			}));
		} else if (name === 'email') {
			setValidationState((prevState) => ({
				...prevState,
				[name]: validateEmail(value),
			}));
		} else {
			setValidationState((prevState) => ({
				...prevState,
				[name as string]: validateDefault(value),
			}));
		}
	};

	const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
		const {name, checked} = e.target;

		setFormValues((prevValues) => ({
			...prevValues,
			[name as string]: checked ? '1' : '',
		}));

		if (name === 'offersAgreement') {
			setValidationState((prevState) => ({
				...prevState,
				[name]: true,
			}));
		} else {
			setValidationState((prevState) => ({
				...prevState,
				[name as any]: checked,
			}));
		}
	};

	useEffect(() => {
		const allValid = Object.values(validationState).every(Boolean);
		isDone(allValid);
		console.log(`validationState`, validationState);
	}, [validationState, isDone]);

	const isValidInput = (name: string): boolean => {
		return !validationState[name] && formValues[name].length > 0;
	};

	return (
		<div>
			<Input
				name="sex"
				isSelect
				type="text"
				placeholder="Виберіть стать"
				onChange={handleInputChange}
				label="Стать"
			>
				<>
					<option value="none">Виберіть
						стать
					</option>
					<option value="male">Жіноча</option>
					<option value="female">Чоловіча</option>
				</>
			</Input>

			<Input
				name="lastname"
				type="text"
				placeholder="Прізвище"
				value={formValues.lastname}
				onChange={handleInputChange}
				label="Прізвище (як у паспорті)"
				isInvalid={isValidInput('lastname')}
			/>

			<Input
				name="firstname"
				type="text"
				placeholder="Iм’я"
				label="Iм’я (як у паспорті)"
				value={formValues.firstname}
				onChange={handleInputChange}
				isInvalid={isValidInput('firstname')}
			/>

			<Input
				name="middlename"
				type="text"
				placeholder="По батькові"
				label="По батькові (як у паспорті)"
				value={formValues.middlename}
				onChange={handleInputChange}
				isInvalid={isValidInput('middlename')}
			/>

			<Input
				name="dateOfBirth"
				type="text"
				placeholder="дд/мм/рррр"
				label="Дата народження"
				value={formValues.dateOfBirth}
				onChange={handleInputChange}
				isInvalid={isValidInput('dateOfBirth')}
			/>

			<Input
				name="phone"
				type="tel"
				placeholder="+380"
				label="Номер телефону"
				value={formValues.phone}
				onChange={handleInputChange}
				isInvalid={isValidInput('phone')}
			/>

			<Input
				name="email"
				type="email"
				placeholder="email@email.com"
				label="Email"
				value={formValues.email}
				onChange={handleInputChange}
				isInvalid={isValidInput('email')}
			/>

			<Input
				name="password"
				type="text"
				placeholder="Мінімум 8 символів"
				label="Пароль"
				value={formValues.password}
				onChange={handleInputChange}
				isInvalid={isValidInput('password')}
			/>

			<Input
				name="confirmPassword"
				type="text"
				placeholder="Мінімум 8 символів"
				label="Підтвердити пароль"
				value={formValues.confirmPassword}
				onChange={handleInputChange}
				isInvalid={isValidInput('confirmPassword')}
			/>

			<Checkbox
				name="dataProcessing"
				label={`Надаю ТОВ "Системний Фінансовий Консалтинг" згоду на обробку моїх персональних даних`}
				value={formValues.dataProcessing}
				onChange={handleCheckboxChange}
			/>

			<Checkbox
				name="offersAgreement"
				label="Надаю згоду на отримання повідомлень про пропозиції кредитних продуктів та послуг"
				value={formValues.offersAgreement}
				onChange={handleCheckboxChange}
			/>
		</div>
	);
}

export default RegistrationStep1;
