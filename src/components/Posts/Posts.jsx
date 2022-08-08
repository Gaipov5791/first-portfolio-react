import React from 'react'

function Posts({posts}) {
  return (
	 <ul>
		{posts.map((item) => (
			<li key={item.id}>
				<h3>{item.title}</h3>
				<p>{item.body}</p>
			</li>
		))}
	 </ul>
  )
}

export default Posts