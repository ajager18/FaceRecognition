import React from 'react';

const Rank = ({name,entries}) => {
	return (
		<div>
			<div>
				<div className= 'white f3'>{`${name}, your picture count is`}</div>
			</div>
			<div>
				<div className= 'white f1'>{entries}</div>
			</div>
		</div>
	)
}

export default Rank;