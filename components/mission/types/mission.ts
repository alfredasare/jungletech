import { SVGProps } from 'react';

export type MissionType = {
	name: string;
	icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
	text: string;
	image: string;
	imageAlt: string;
};
