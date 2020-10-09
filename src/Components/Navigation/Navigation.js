import React from 'react';

const Navigation = ({onRouteChange,onSignOut,isSignedIn,route}) => {
	if (!isSignedIn && route==='register')
	{
		return (
				<div style={{display:'flex', justifyContent:'flex-end'}}>
				<p onClick={()=>onRouteChange('signin')} className='ma3 link dim underline pointer'>Sign in</p>
				</div>
			)
	}
	if (isSignedIn)
	{
		return (
		<div style={{display:'flex', justifyContent:'flex-end'}}>
		<p onClick={onSignOut} className='f3 ma3 link dim underline pointer'>Sign out</p>
		</div>)
	}
	
	else
	{
		return (
		<div style={{display:'flex', justifyContent:'flex-end'}}>
		<p onClick={()=>onRouteChange('register')} className='ma3 link dim underline pointer'>Register</p>
		</div>)
	}
}

export default Navigation;