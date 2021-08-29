export type Social = {
	name: string;
	href: string;
	icon: (props: { [p: string]: string }) => JSX.Element;
};
