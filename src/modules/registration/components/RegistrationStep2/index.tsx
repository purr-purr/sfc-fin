import {type ChangeEvent, FC, useEffect, useState} from 'react';
import Input from "@modules/common/components/Input";
import Checkbox from "@modules/common/components/Checkbox";
import {regions} from "@utils/data";
import s from './RegistrationStep2.module.scss';

type FormValues = {
	[key: string]: string;
};

type ValidationState = {
	[key: string]: boolean;
};


const RegionsList = () => (
	<>
		{regions.map((item) => (
			<option key={item.value} value={item.value}>
				{item.title}
			</option>
		))}
	</>
);

const RegistrationStep2: FC<{
	isDone: (value: boolean) => void;
}> = ({isDone}) => {
	const initFormValues: FormValues = {
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
		income: '',
		socialStatus: '',
	};

	const [formValues, setFormValues] = useState<FormValues>(initFormValues);
	const [validationState, setValidationState] = useState<ValidationState>({
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
		income: false,
		socialStatus: false,
	});

	const validateDefault = (value: string): boolean => {
		return value.length >= 3;
	};

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
					<RegionsList/>
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
				<RegionsList/>
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
				<>
					<option value="none">Виберiть освiту
					</option>
				</>
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
				</>
			</Input>

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
		</>
	);
}

export default RegistrationStep2;
