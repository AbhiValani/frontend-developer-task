import React from 'react';
import './RecentPosts.scss';
import PropTypes from 'prop-types';
import { EllipsisOutlined } from '@ant-design/icons';
import FormField from '../FormField';
import chatIcon from '../../resources/chat_icon.png';

function RecentPosts(props) {
	const {
		name,
		image,
		content,
		createdAt,
		updatedAt,
		totalComments,
		emoji,
	} = props;
	return (
		<div className="recent-posts-ctr center">
			<div className='post-header flex--row'>
				<img src={image} height={44} width={44} />
				<div className='user-section flex--row jc-sb'>
					<div className='flex--column'>
						<div className='profile-name'>{name}</div>
						<div className='post-time'>
							{updatedAt}
							{createdAt === updatedAt ? '' : <><span className="dot"/>Edited</>}
						</div>
					</div>
					<EllipsisOutlined />
				</div>
			</div>
			<FormField
				name="post"
				type="textarea"
				emoji={emoji}
				disabled={true}
				value={content}
			/>
			<div className='comment-ctr'>
				<span className='chat-icon'>
					<img src={chatIcon} width={18} height={15} />
				</span>
				<span className='comment'>{totalComments} comments</span>
			</div>
		</div>
	);
}

export default RecentPosts;

RecentPosts.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	image: PropTypes.string,
	content: PropTypes.string,
	createdAt: PropTypes.string,
	updatedAt: PropTypes.string,
	totalComments: PropTypes.number,
	emoji: PropTypes.string,
};