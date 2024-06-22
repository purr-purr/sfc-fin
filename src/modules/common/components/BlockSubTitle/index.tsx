import { FC } from 'react';

import s from './BlockSubTitle.module.scss';
import cn from 'classnames';

const BlockSubTitle: FC<{
	title: string;
	className?: string;
}> = ({ title, className }) => {
	return <h3 className={cn(s.container, className && className)}>{title}</h3>;
};

export default BlockSubTitle;
