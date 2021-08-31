import {
	createContext,
	useState,
	useEffect,
	ReactChild,
	FC,
	SetStateAction,
	Dispatch,
} from 'react';

type NavigationType = { name: string; href: string }[];

type NavContextType = {
	currentHash: string;
	setCurrentHash: Dispatch<SetStateAction<string>>;
	navigation: NavigationType;
};

interface IProps {
	children: ReactChild;
}

export const NavContext = createContext<NavContextType>({
	currentHash: '',
	navigation: [],
	setCurrentHash(value: ((prevState: string) => string) | string): void {},
});

const NavProvider: FC<IProps> = ({ children }) => {
	const [currentHash, setCurrentHash] = useState('');

	const navigation = [
		{
			name: 'About',
			href: '#about',
		},
		{
			name: 'Mission',
			href: '#mission',
		},
		{
			name: 'Our Work',
			href: '#work',
		},
		{
			name: 'Why Us',
			href: '#why-us',
		},
		{
			name: 'Contact',
			href: '#contact',
		},
	];

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setCurrentHash(window.location.hash);
		}
	}, [setCurrentHash]);

	return (
		<NavContext.Provider
			value={{
				currentHash,
				setCurrentHash,
				navigation,
			}}
		>
			{children}
		</NavContext.Provider>
	);
};

export default NavProvider;
