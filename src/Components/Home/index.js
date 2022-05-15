import React, { useEffect, useState } from 'react';
import FormField from '../FormField';
import RecentPosts from '../RecentPosts';
import Register from '../Register';
import './Home.scss';
import { getPosts } from './HomeMixins';

const name ='Jane';
const content='How are you doing today? Would you like to share something with the community 🤗';
function Home() {
	const [posts, setPosts] = useState([]);
	const [registerPopup, setRegisterPopup] = useState(false);
	useEffect(() => {
		setPosts(getPosts());
	},[]);
	function onPost() {
		// Will check if user is already loggedIn or not
		// If logged in ,hit the backend, post the content
		// If not , check if user exist or not -- If exist redirect to login popup
		// Otherwise redirect to register popup
		// Here we have assumed user doesn't exist so redirect to Register popup
		setRegisterPopup(true);
	}
	return (
		<>
			<div className={`home-ctr center ${registerPopup ? 'bg-blur': ''}`}>
				<div className='header'>
					<div className='home-title'>Hello {name}</div>
					<div className='home-subtitle'>{content}</div>
				</div>
				<div className='post-comment-section'>
					<div className='create-post-ctr'>
						<div className='heading'>Create post</div>
						<FormField
							name="comment"
							type="textarea"
							emoji="💬"
							placeholder="How are you feeling today?" />
						<button type="button" onClick={onPost}>Post</button>
					</div>
					{posts.map((post) => (
						<RecentPosts
							key={post.id}
							name={post.name}
							image={post.image}
							createdAt={post.createdAt}
							updatedAt={post.updatedAt}
							totalComments={post.totalComments}
							emoji={post.emoji}
							content={post.content}
						/>
					))}
				</div>
			</div>
			{
				registerPopup ?
					<div className='flex--row center popup'>
						<Register closable={true} setVisible={setRegisterPopup} />
					</div> : null
			}
		</>
	);
}

export default Home;
