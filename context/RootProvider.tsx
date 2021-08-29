import type { ReactChild, FC } from 'react';
import NavProvider from './NavProvider';

interface IProps {
	children: ReactChild;
}

const RootProvider: FC<IProps> = ({ children }) => {
	return <NavProvider>{children}</NavProvider>;
};

export default RootProvider;
