import s from './Registration.module.scss';
import Button from "@modules/common/components/Button";
import ModalLayout from "@modules/common/components/ModalLayout";
import {useState} from "react";
import RegistrationStapper
	from "@modules/registration/components/RegistrationStapper";
import RegistrationStep1
	from "@modules/registration/components/RegistrationStep1";
import RegistrationStep2
	from "@modules/registration/components/RegistrationStep2";
import RegistrationStep3
	from "@modules/registration/components/RegistrationStep3";
import type {registrationSteps} from "@modules/registration/types";
import RegistrationStep4
	from "@modules/registration/components/RegistrationStep4";
import {useMediaQuery} from "@modules/common/hooks";
import {LOW_MOBILE_BREAKPOINT} from "@utils/const";

const Registration = () => {
	const [isRegistrationModal, setIsRegistrationModal] = useState<boolean>(false);
	const [stepNumber, setStepNumber] = useState<registrationSteps>(1);
	const [stepFormValid, setStepFormValid] = useState<boolean>(false);
	const [isSuccessStage, setIsSuccessStage] = useState<boolean>(false);
	const isLowMobile = useMediaQuery(LOW_MOBILE_BREAKPOINT);

	const handleSuccessStage = () => {
		setIsSuccessStage(true);
	}

	const handleRegistrationModalClose = () => {
		setIsRegistrationModal(false);
		setStepNumber(1);
		setStepFormValid(false);
		setIsSuccessStage(false);
	}

	const handleStepNext = () => {
		setStepNumber(prevStep => (prevStep < 4 ? (prevStep + 1) as registrationSteps : prevStep));
	}

	const getStepComponent = {
		1: <RegistrationStep1 isDone={setStepFormValid}/>,
		2: <RegistrationStep2 isDone={setStepFormValid}/>,
		3: <RegistrationStep3 isDone={setStepFormValid}/>,
		4: <RegistrationStep4 isDone={setStepFormValid}/>
	}

	return (
		<>
			<Button
				className={s.startRegistrationBtn}
				text="Оформити кредит"
				onClick={() => setIsRegistrationModal(true)}
			/>

			<ModalLayout
				className={s.container}
				isOpen={isRegistrationModal}
				onClose={handleRegistrationModalClose}
			>
				{isSuccessStage ? (
					<p className={s.successStage}>ДЯКУЄМО, ваша інформація відправлена на
						обробку, очікуйте дзвінок
						від кредитного менеджера</p>
				) : (
					<>
						<h3 className={s.title}>Оформлення споживчого кредиту</h3>
						{!isLowMobile &&
							<RegistrationStapper step={stepNumber as registrationSteps}/>}
						{getStepComponent[stepNumber as registrationSteps]}
					</>
				)}

				<Button
					onClick={isSuccessStage ? handleRegistrationModalClose : stepNumber === 4 ? handleSuccessStage : handleStepNext}
					className={s.startRegistrationBtn}
					isDisabled={!stepFormValid}
					text={isSuccessStage ? 'Закрити' : 'Продовжити'}
				/>
			</ModalLayout>
		</>
	);
}

export default Registration;
