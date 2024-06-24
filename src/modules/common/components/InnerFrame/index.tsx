import {FC, type ReactNode} from 'react';

import s from './InnerFrame.module.scss';
import cn from 'classnames';

const InnerFrame: FC<{
	children: ReactNode;
	className?: string;
	id?: string;
}> = ({children, className, id}) => {
	return (
		<section id={id} className={cn(s.container, className && className)}>
			{children}
		</section>
	);
};

export default InnerFrame;
