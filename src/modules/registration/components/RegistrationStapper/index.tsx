import {styled} from '@mui/material/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, {stepConnectorClasses} from '@mui/material/StepConnector';
import type {StepIconProps} from '@mui/material/StepIcon';
import s from './RegistrationStapper.module.scss';
import {FC} from "react";

const ColorlibConnector = styled(StepConnector)(() => ({
	[`&.${stepConnectorClasses.alternativeLabel}`]: {
		top: 22,
	},
	[`&.${stepConnectorClasses.active}`]: {
		[`& .${stepConnectorClasses.line}`]: {
			backgroundColor:
				'#E9E9EB',
		},
	},
	[`&.${stepConnectorClasses.completed}`]: {
		[`& .${stepConnectorClasses.line}`]: {
			backgroundColor:
				'#0056B9',
		},
	},
	[`& .${stepConnectorClasses.line}`]: {
		height: 4,
		border: 0,
		backgroundColor: '#E9E9EB',
		borderRadius: 1,
	},
}));

const ColorlibStepIconRoot = styled('div')<{
	ownerState: { completed?: boolean; active?: boolean };
}>(({ownerState}) => ({
	backgroundColor: '#E9E9EB',
	zIndex: 1,
	color: '#fff',
	fontWeight: 700,
	fontSize: '18px',
	width: 50,
	height: 50,
	display: 'flex',
	borderRadius: '50%',
	justifyContent: 'center',
	alignItems: 'center',
	...(ownerState.active && {
		backgroundColor:
			'#E9E9EB',
	}),
	...(ownerState.completed && {
		backgroundColor:
			'#0056B9',
	}),
}));

function ColorlibStepIcon(props: StepIconProps) {
	const {active, completed} = props;

	const stepsNumber: { [index: string]: string } = {
		1: '1',
		2: '2',
		3: '3',
		4: '4',
	};

	return (
		<ColorlibStepIconRoot
			ownerState={{completed, active}}>
			{stepsNumber[String(props.icon)]}
		</ColorlibStepIconRoot>
	);
}

const RegistrationStapper: FC<{ step: registrationSteps }> = ({step = 1}) => {
	const steps = ['Реєстрація', 'Анкета споживача', 'Реквізити картки', 'Підтвердження даних'];

	return (
		<Stepper
			className={s.container}
			alternativeLabel
			activeStep={step}
			connector={<ColorlibConnector/>}
		>
			{steps.map((label) => (
				<Step key={label}>
					<StepLabel StepIconComponent={ColorlibStepIcon}>
						{label}
					</StepLabel>
				</Step>
			))}
		</Stepper>
	);
}
export default RegistrationStapper;
