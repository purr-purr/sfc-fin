import {FC} from 'react';

import s from './Button.module.scss';
import cn from 'classnames';

const Button: FC<{
	text: string;
	type?: 'primary' | 'white' | 'light' | 'text';
	size?: 'small' | 'regular';
	className?: string;
	onClick?: () => void;
	isDisabled?: boolean;
}> = ({
	      isDisabled = false,
	      onClick,
	      text,
	      type = 'primary',
	      size = 'regular',
	      className
      }) => {
	return (
		<button
			disabled={isDisabled}
			onClick={onClick}
			className={cn(s.container, s[type], s[size], className && className)}>
			{text}
		</button>
	);
};

export default Button;
