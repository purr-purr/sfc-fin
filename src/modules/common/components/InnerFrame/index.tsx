import { FC, type ReactNode } from 'react';

import s from './InnerFrame.module.scss';
import cn from 'classnames';

const InnerFrame: FC<{
	children: ReactNode;
	className?: string;
}> = ({ children, className }) => {
	return (
		<section className={cn(s.container, className && className)}>
			{children}
		</section>
	);
};

export default InnerFrame;
