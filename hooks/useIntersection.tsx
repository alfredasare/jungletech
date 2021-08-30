import { useContext, useEffect } from 'react';
import { NavContext } from '../context/NavProvider';

const useIntersection = (inView: boolean, linkID: string) => {
	const { setCurrentHash } = useContext(NavContext);

	useEffect(() => {
		if (inView) {
			setCurrentHash(linkID);
		}
	}, [inView, setCurrentHash, linkID]);
};

export default useIntersection;
