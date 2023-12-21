import React from 'react';

const Chip = ({ title }) => {
	return (
		<span className='block text-xs w-fit py-1.5 px-4 rounded-3xl bg-white/10 border border-white/40'>
			{title}
		</span>
	);
};

export default Chip;