import React from 'react';
import './ImageLinkInput.css'

const ImageLinkInput = ({onInputChange,onPictureSubmit,onfocus}) => {
	return (
		<div>
		<div>
		<p className= 'f3'>This Magic Brain will detect faces in your picture. Give it a try</p>
		</div>
		<div  className='center'>
			<div className='form center pa3 ma2 shadow-5'>
			<input id='inp' onFocus={onfocus} onChange= {onInputChange} className='f4 pa2 center w-70' type='text' placeholder='Image link here'/>
			<button onClick= {onPictureSubmit} className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>
			</div>
		</div>
		</div>
	)
}

export default ImageLinkInput;