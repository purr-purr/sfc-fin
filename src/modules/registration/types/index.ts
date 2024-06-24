export type registrationSteps = 1 | 2 | 3 | 4;

export interface IFormValues {
	[key: string]: string;
}

export interface IValidationState {
	[key: string]: boolean;
}

export interface IRegistrationStepProps {
	isDone: (value: boolean) => void;
}
