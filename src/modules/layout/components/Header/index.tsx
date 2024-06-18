import Logo from '@modules/common/components/Logo';
import Navigation from '@modules/layout/components/Navigation';
import NavigationButton from '@modules/layout/components/NavigationButton';
import {HeaderContextWrapper} from '@modules/layout/context/HeaderContext';

import {useMediaQuery} from '@modules/common/hooks';

import {LAPTOP_BREAKPOINT} from '@utils/const';

import s from './Header.module.scss';
import Button from "@modules/common/components/Button";

const Header = () => {
	const isLaptop = useMediaQuery(LAPTOP_BREAKPOINT);

	return (
		<header className={s.container}>
			<Logo/>

			<HeaderContextWrapper>
				<Navigation/>
				<Button className={s.signInButton} type="white" size="small"
				        text="Увійти"/>
				{isLaptop && <NavigationButton/>}
			</HeaderContextWrapper>
		</header>
	);
};

export default Header;
