import type { FC, ReactNode } from 'react';
import Head from 'next/head';

interface IProps {
	children: ReactNode;
	title: string;
}

const Layout: FC<IProps> = ({ children, title }) => {
	return (
		<main>
			<Head>
				<title>{title}</title>
			</Head>
			{children}
		</main>
	);
};

export default Layout;
