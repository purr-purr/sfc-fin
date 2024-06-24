import {type ChangeEvent, FC, useEffect, useState} from 'react';
import Input from "@modules/common/components/Input";
import Checkbox from "@modules/common/components/Checkbox";
import s from './RegistrationStep2.module.scss';
import {validateDefault} from "@modules/registration/helpers";
import type {
	IFormValues,
	IRegistrationStepProps,
	IValidationState
} from "@modules/registration/types";
import RegistrationRegionsList
	from "@modules/registration/components/RegistrationRegionsList";

const RegistrationStep2: FC<IRegistrationStepProps> = ({isDone}) => {
	const initFormValues: IFormValues = {
		id: '',
		passport: '',
		passportIssuedBy: '',
		dateOfIssue: '',
		area: '',
		city: '',
		street: '',
		house: '',
		apartment: '',
		regArea: '',
		regCity: '',
		regStreet: '',
		regHouse: '',
		regApartment: '',
		education: '',
		income: '',
		socialStatus: '',
		confirmConsumerLoans: '',
		confirmTransferInformation: '',
	};

	const [formValues, setFormValues] = useState<IFormValues>(initFormValues);
	const [validationState, setValidationState] = useState<IValidationState>({
		id: false,
		passport: false,
		passportIssuedBy: false,
		dateOfIssue: false,
		area: false,
		city: false,
		street: false,
		house: false,
		apartment: false,
		regArea: false,
		regCity: false,
		regStreet: false,
		regHouse: false,
		regApartment: false,
		education: false,
		income: false,
		socialStatus: false,
		confirmConsumerLoans: false,
		confirmTransferInformation: false,
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

	const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
		const {name, checked} = e.target;

		setFormValues((prevValues) => ({
			...prevValues,
			[name]: checked ? '1' : '',
		}));

		setValidationState((prevState) => ({
			...prevState,
			[name]: checked,
		}));

	};

	useEffect(() => {
		const allValid = Object.values(validationState).every(Boolean);
		isDone(allValid);
		console.log(`validationState2`, validationState);
	}, [validationState, isDone]);

	const isValidInput = (name: string): boolean => {
		return !validationState[name] && formValues[name].length > 0;
	};


	return (
		<>
			<h4 className={s.subTitle}>Документи</h4>

			<Input
				name="id"
				type="text"
				placeholder="0000-YYYY-NNNNNNN-C"
				value={formValues.id}
				onChange={handleInputChange}
				label="Ідентифікаційний код"
				isInvalid={isValidInput('id')}
			/>

			<Input
				name="passport"
				type="text"
				placeholder="MM00000"
				value={formValues.passport}
				onChange={handleInputChange}
				label="Номер та серія паспорта"
				isInvalid={isValidInput('passport')}
			/>

			<Input
				name="passportIssuedBy"
				type="text"
				placeholder="Назва установи"
				value={formValues.passportIssuedBy}
				onChange={handleInputChange}
				label="Ким виданий"
				isInvalid={isValidInput('passportIssuedBy')}
			/>

			<Input
				name="dateOfIssue"
				type="text"
				placeholder="дд/мм/рррр"
				value={formValues.dateOfIssue}
				onChange={handleInputChange}
				label="Дата видачі"
				isInvalid={isValidInput('dateOfIssue')}
			/>

			<h4 className={s.subTitle}>Адреса проживання</h4>

			<Input
				name="area"
				isSelect
				onChange={handleInputChange}
				label="Область"
			>
				<>
					<option value="none">Виберіть
						область
					</option>
					<RegistrationRegionsList/>
				</>
			</Input>

			<Input
				name="city"
				type="text"
				placeholder="Назва міста"
				value={formValues.city}
				onChange={handleInputChange}
				label="Місто"
				isInvalid={isValidInput('city')}
			/>

			<Input
				name="street"
				type="text"
				placeholder="Назва вулиці"
				value={formValues.street}
				onChange={handleInputChange}
				label="Вулиця"
				isInvalid={isValidInput('street')}
			/>

			<Input
				name="house"
				type="text"
				placeholder="Номер будинку"
				value={formValues.house}
				onChange={handleInputChange}
				label="Будинок"
				isInvalid={isValidInput('house')}
			/>
			<Input
				name="apartment"
				type="text"
				placeholder="Номер квартири"
				value={formValues.apartment}
				onChange={handleInputChange}
				label="Квартира"
				isInvalid={isValidInput('apartment')}
			/>

			<h4 className={s.subTitle}>Адреса реєстрації</h4>

			<Input
				name="regArea"
				isSelect
				onChange={handleInputChange}
				label="Область"
			>
				<option value="none">Виберіть
					область
				</option>
				<RegistrationRegionsList/>
			</Input>

			<Input
				name="regCity"
				type="text"
				placeholder="Назва міста"
				value={formValues.regCity}
				onChange={handleInputChange}
				label="Місто"
				isInvalid={isValidInput('regCity')}
			/>

			<Input
				name="regStreet"
				type="text"
				placeholder="Назва вулиці"
				value={formValues.regStreet}
				onChange={handleInputChange}
				label="Вулиця"
				isInvalid={isValidInput('regStreet')}
			/>

			<Input
				name="regHouse"
				type="text"
				placeholder="Номер будинку"
				value={formValues.regHouse}
				onChange={handleInputChange}
				label="Будинок"
				isInvalid={isValidInput('regHouse')}
			/>

			<Input
				name="regApartment"
				type="text"
				placeholder="Номер квартири"
				value={formValues.regApartment}
				onChange={handleInputChange}
				label="Квартира"
				isInvalid={isValidInput('regApartment')}
			/>

			<h4 className={s.subTitle}>Додаткова інформація</h4>

			<Input
				name="education"
				isSelect
				onChange={handleInputChange}
				label="Освіта"
			>
				<option value="none">Виберiть освiту
				</option>
				<option value="1">Неповна середня</option>
				<option value="2">Середня</option>
				<option value="3">Середня спеціальна</option>
				<option value="4">Неповна вища</option>
				<option value="5">Вища</option>
				<option value="6">Наукова ступінь</option>
				<option value="7">Друга вища</option>
			</Input>

			<Input
				name="income"
				type="number"
				placeholder="Введіть суму"
				value={formValues.income}
				onChange={handleInputChange}
				label="Місячний дохід (фактичний)"
				isInvalid={isValidInput('income')}
			/>

			<Input
				name="socialStatus"
				isSelect
				onChange={handleInputChange}
				label="Соціальний статус"
			>
				<>
					<option value="none">Виберiть статус
					</option>
					<option value="1">Підприємець</option>
					<option value="2">Особа, що провадить незалежну професійну
						діяльність
					</option>
					<option value="3">Найманий працівник</option>
					<option value="4">Домогосподарка</option>
					<option value="5">Безробітний</option>
					<option value="6">Пенсіонер</option>
					<option value="7">Працюючий пенсіонер</option>
					<option value="8">Студент</option>
				</>
			</Input>

			<Checkbox
				name="confirmConsumerLoans"
				label={`Підтверджую ознайомлення із Правилами надання споживчих кредитів`}
				value={formValues.confirmConsumerLoans}
				onChange={handleCheckboxChange}
			/>

			<Checkbox
				name="confirmTransferInformation"
				label={`Надаю ТОВ "Системний Фінансовий Консалтинг" згоду на запит та передачу інформації, що складає мою кредитну історію`}
				value={formValues.confirmTransferInformation}
				onChange={handleCheckboxChange}
			/>
		</>
	);
}

export default RegistrationStep2;
