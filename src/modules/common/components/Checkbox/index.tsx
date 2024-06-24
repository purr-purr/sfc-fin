import type {FC} from 'react';
import {ChangeEvent} from "react";

import s from './Checkbox.module.scss'

interface CheckboxProps {
	label: string;
	name: string;
	value: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: FC<CheckboxProps> = ({
	                                     onChange,
	                                     value,
	                                     name,
	                                     label,
	                                     ...props
                                     }) => {
	const {...checkboxProps} = props;
	return (
		<label className={s.container}>
			<input
				type="checkbox"
				name={name}
				value={value}
				onChange={onChange}
				{...checkboxProps}
			/>
			{label}
		</label>
	);
};

export default Checkbox;
