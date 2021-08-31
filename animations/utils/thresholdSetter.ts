type ThresholdSetterType = {
	(desktopThreshold: number, mobileThreshold?: number): number | undefined;
};

const thresholdSetter: ThresholdSetterType = (
	desktopThreshold,
	mobileThreshold,
) => {
	if (typeof window !== 'undefined') {
		const mobile = window.matchMedia('(max-width: 640px)');

		if (mobile.matches && mobileThreshold) {
			return mobileThreshold;
		}

		return desktopThreshold;
	}
};

export default thresholdSetter;
