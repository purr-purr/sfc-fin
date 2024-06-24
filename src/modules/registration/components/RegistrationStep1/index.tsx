import {type ChangeEvent, FC, useEffect, useState} from 'react';
import Input from "@modules/common/components/Input";
import Checkbox from "@modules/common/components/Checkbox";

type FormValues = {
	[key: string]: string;
};

type ValidationState = {
	[key: string]: boolean;
};

const RegistrationStep1: FC<{
	isDone: (value: boolean) => void;
}> = ({isDone}) => {
	const initFormValues: FormValues = {
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

	const [formValues, setFormValues] = useState<FormValues>(initFormValues);
	const [validationState, setValidationState] = useState<ValidationState>({
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

	const validatePhone = (phone: string): boolean => {
		const phoneRegex = /^\+380\d{9}$/;
		return phoneRegex.test(phone);
	};

	const validateEmail = (email: string): boolean => {
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		return emailRegex.test(email);
	};

	const validateDefault = (value: string): boolean => {
		return value.length >= 3;
	};

	const validatePassword = (password: string): boolean => {
		return password.length >= 8;
	};

	const validateConfirmPassword = (password: string): boolean => {
		return password === formValues.password;
	};

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const {name, value} = e.target;

		setFormValues((prevValues) => ({
			...prevValues,
			[name]: value,
		}));

		if (name === 'password') {
			setValidationState((prevState) => ({
				...prevState,
				password: validatePassword(value),
			}));
		} else if (name === 'confirmPassword') {
			setValidationState((prevState) => ({
				...prevState,
				confirmPassword: validateConfirmPassword(value),
			}));
		} else if (name === 'phone') {
			setValidationState((prevState) => ({
				...prevState,
				phone: validatePhone(value),
			}));
		} else if (name === 'email') {
			setValidationState((prevState) => ({
				...prevState,
				email: validateEmail(value),
			}));
		} else {
			setValidationState((prevState) => ({
				...prevState,
				[name]: validateDefault(value),
			}));
		}
	};

	const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
		const {name, checked} = e.target;

		setFormValues((prevValues) => ({
			...prevValues,
			[name]: checked ? '1' : '',
		}));

		if (name === 'offersAgreement') {
			setValidationState((prevState) => ({
				...prevState,
				[name]: true,
			}));
		} else {
			setValidationState((prevState) => ({
				...prevState,
				[name]: checked,
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
