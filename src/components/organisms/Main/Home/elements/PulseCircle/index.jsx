import React from 'react';

const PulseCircle = () => {
	return (
		<span className="relative flex h-3 w-3">
			<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ee8695] opacity-75"></span>
			<span className="relative inline-flex rounded-full h-3 w-3 bg-[#d77a88]"></span>
		</span>
	);
};

export default PulseCircle;