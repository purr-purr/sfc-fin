import type {FC} from 'react';

import s from './Checkbox.module.scss'

interface CheckboxProps {
	label: string;
}

const Checkbox: FC<CheckboxProps> = ({label, ...props}) => {
	return (
		<label className={s.container}>
			<input
				type="checkbox"
				{...props}
			/>
			{label}
		</label>
	);
};

export default Checkbox;
