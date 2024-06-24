import s from './SignIn.module.scss';
import Button from "@modules/common/components/Button";
import ModalLayout from "@modules/common/components/ModalLayout";
import {type ChangeEvent, useEffect, useState} from "react";
import Input from "@modules/common/components/Input";

type IFormValues = {
	phone: string;
	password: string;
};

const SignIn = () => {
	const [isSignInModal, setIsSignInModal] = useState<boolean>(false);
	const [isSubmitError, setIsSubmitError] = useState<boolean>(false);

	const initFormValues: IFormValues = {
		phone: '',
		password: ''
	}
	const [formValues, setFormValues] = useState<IFormValues>(initFormValues);

	useEffect(() => {
		setFormValues(initFormValues);
		setIsSubmitError(false);
	}, [isSignInModal]);

	const handleResetClick = () => {
		setFormValues({phone: '', password: ''});
		!isSubmitError && setIsSubmitError(true);
	};

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const {name, value} = e.target;
		setFormValues((prevValues) => ({
			...prevValues,
			[name]: value,
		}));
		isSubmitError && setIsSubmitError(false);
	};

	const isEmptyForm = formValues.password.length < 1 || formValues.phone.length < 1;

	return (
		<>
			<Button
				className={s.signInButton}
				type="white"
				size="small"
				text="Увійти"
				onClick={() => setIsSignInModal(true)}
			/>
			<ModalLayout
				className={s.container}
				isOpen={isSignInModal}
				onClose={() => setIsSignInModal(false)}
			>
				<h3 className={s.title}>Будь ласка, введіть ваші облікові дані для
					входу</h3>

				<Input
					name="phone"
					type="tel"
					placeholder="+380"
					value={formValues.phone}
					onChange={handleInputChange}
					label="Номер телефону, який ви вказали під час реєстрації"
				/>

				<Input
					name="password"
					type="text"
					placeholder="Мінімум 8 символів"
					label="Пароль"
					value={formValues.password}
					onChange={handleInputChange}
					minLength={8}
				/>

				<p
					className={s.errorMessage}>{isSubmitError && 'Невірний Номер телефону або Пароль'}</p>

				<Button
					isDisabled={isEmptyForm}
					onClick={handleResetClick}
					className={s.submitButton}
					text="Увійти"
				/>
			</ModalLayout>
		</>
	);
}

export default SignIn;
