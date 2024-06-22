import { FC, type ReactNode } from 'react';

import BlockSubTitle from '@modules/common/components/BlockSubTitle';

import s from './SplitBlocks.module.scss';
import cn from 'classnames';

const SplitBlocks: FC<{
	children: ReactNode;
	className?: string;
	title: string;
	anchor?: string;
}> = ({ children, title, anchor, className }) => {
	return (
		<article className={cn(s.container, className && className)} id={anchor}>
			<BlockSubTitle className={s.leftSide} title={title} />
			<div className={s.rightSide}>{children}</div>
		</article>
	);
};

export default SplitBlocks;
