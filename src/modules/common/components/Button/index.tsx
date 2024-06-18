import {FC} from 'react';

import s from './Button.module.scss';
import cn from "classnames";

const Button: FC<{
	text: string;
	type?: "primary" | "white";
	size?: "small" | "regular";
	className?: string;
}> = ({
	      text,
	      type = "primary",
	      size = "regular",
	      className
      }) => {
	return (
		<button
			className={cn(s.container, s[type], s[size], className && className)}>{text}</button>
	);
}

export default Button;
