import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Posts from "../../components/Posts/Posts";
import Pagination from '../../components/Pagination/Pagination';

function Blog() {
	const [posts, setPosts] = useState([]);
	const [currentPage,  setCurrentPage] = useState(1);
	const [postsPerPage, setPostsPerPage] = useState(10); 

	useEffect(() => {
		const fetchPosts = async () => {
			const response = await axios.get("https://jsonplaceholder.typicode.com/posts");

			setPosts(response.data)
		};
		
		fetchPosts();
	}, []);

	const lastPostIndex = currentPage * postsPerPage;
	const firstPostIndex = lastPostIndex - postsPerPage;
	const currentPost = posts.slice(firstPostIndex, lastPostIndex);

	const paginate = pagesNumber => setCurrentPage(pagesNumber);
	const nextPage = () => setCurrentPage( prev => prev + 1);
	const prevPage = () => setCurrentPage( prev => prev - 1);

	return (
		<section className='blog'>
			<h1 style={{textAlign: "center"}}>Blog Page</h1>
			<div className="container">
				<Posts posts={currentPost}></Posts>
				<Pagination 
					postsPerPage={postsPerPage} 
					totalPosts={posts.length}
					paginate={paginate}
					/>
				
				<button style={{
					backgroundColor: "blue",
					color: "white",
					marginRight: "5px",
					padding: "10px 20px",
				}}
					onClick={nextPage}
				>Prev Page</button>	
				<button style={{
					backgroundColor: "blue",
					color: "white",
					padding: "10px 20px",
				}}
					onClick={prevPage}
				>Next Page</button>	
				
			</div>
		</section>
	)
}

export default Blog