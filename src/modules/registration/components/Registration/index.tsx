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

const Registration = () => {
	const [isRegistrationModal, setIsRegistrationModal] = useState<boolean>(false);
	const [stepNumber, setStepNumber] = useState<registrationSteps>(1);
	const [stepFormValid, setStepFormValid] = useState<boolean>(false);

	// const handleStepBack = () => {
	// 	setStepNumber(prevStep => (prevStep > 1 ? (prevStep - 1) as registrationSteps : prevStep));
	// }

	const handleStepNext = () => {
		setStepNumber(prevStep => (prevStep < 4 ? (prevStep + 1) as registrationSteps : prevStep));
	}

	const getStepComponent = {
		1: <RegistrationStep1 isDone={setStepFormValid}/>,
		2: <RegistrationStep2 isDone={setStepFormValid}/>,
		3: <RegistrationStep2 isDone={setStepFormValid}/>,
		4: <RegistrationStep2 isDone={setStepFormValid}/>
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
				onClose={() => setIsRegistrationModal(false)}
			>
				<h3 className={s.title}>Оформлення споживчого кредиту</h3>

				<RegistrationStapper step={2}/>
				{/*<RegistrationStapper step={stepNumber as registrationSteps}/>*/}

				{getStepComponent[2]}
				{/*{getStepComponent[stepNumber as registrationSteps]}*/}

				<Button
					onClick={handleStepNext}
					className={s.startRegistrationBtn}
					isDisabled={!stepFormValid}
					text="Продовжити"
				/>
			</ModalLayout>
		</>
	);
}

export default Registration;
