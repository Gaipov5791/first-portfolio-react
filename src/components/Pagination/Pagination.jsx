import React from 'react'

function Pagination({ postsPerPage, totalPosts, paginate }) {
	const pagesNumber = [];

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++ ) {
		pagesNumber.push(i);
	}
  return (
	 <div>
		<ul style={{
			margin: "0 0 20px", 
			padding: 0, 
			listStyle: "none", 
			display: "flex", 
			gap: "15px",
			flexWrap: "wrap", 
			}}>
			{
				pagesNumber.map(number => (
					<li style={{
						border: "1px solid black",
						padding: "5px 10px",
					}}>
						<a href="#" onClick={() => paginate(number)}>
							{number}
						</a>
					</li>
				))
			}
		</ul>
	 </div>
  )
}

export default Pagination