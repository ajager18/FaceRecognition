import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({imageUrl,box}) => {
	return (
		<div className='center'>
		<div className='absolute'>
		<img id='inputimage' src={imageUrl} alt='' width='500' height='auto'/>
		<div className= 'box' style={{top: box.topRow, bottom: box.bottomRow, left:box.leftCol, right: box.rightCol }} ></div>
		</div>
		</div>
	)
}

export default FaceRecognition;