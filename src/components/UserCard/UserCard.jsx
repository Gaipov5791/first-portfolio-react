import React from 'react'

function UserCard({userName, userAge}) {
	return (
		<div>
			<h2>{userName}</h2>
			<p>{userAge}</p>
		</div>
		
	)
}

export default UserCard