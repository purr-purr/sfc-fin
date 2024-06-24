import {FC, InputHTMLAttributes, ReactNode} from 'react';

import s from './Input.module.scss';
import cn from "classnames";

interface InputProps extends InputHTMLAttributes<HTMLInputElement | HTMLSelectElement> {
	label: string,
	placeholder?: string,
	isInvalid?: boolean,
	name: string,
	isSelect?: boolean,
	children?: ReactNode,
}

const Input: FC<InputProps> = ({
	                               name,
	                               isInvalid = false,
	                               placeholder,
	                               label,
	                               isSelect = false,
	                               children,
	                               ...props
                               }) => {
	const {...inputProps} = props;
	return (
		<label className={s.container}>
			<p className={s.label}>{label}</p>
			{isSelect ? (
				<select {...inputProps} name={name}
				        className={cn(s.input, s.select, isInvalid && s.invalid)}>
					{children}
				</select>
			) : (<input
				{...inputProps}
				className={cn(s.input, isInvalid && s.invalid)}
				name={name}
				placeholder={placeholder || ''}
			/>)}

			<hr className={s.line}/>
		</label>
	);
}

export default Input;
