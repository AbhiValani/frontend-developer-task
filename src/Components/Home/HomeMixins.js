/* eslint-disable max-len */
import  boyProfile  from '../../resources/boy_profile.png';
import  girlProfile  from '../../resources/girl_profile.png';

export function getPosts() {
	// This is supposed to come from backend but currently hardcoded
	return [
		{
			id:'1',
			name: 'Theresa Webb',
			image: girlProfile,
			content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
			emoji: '👋',
			totalComments: 24,
			createdAt: '5mins ago',
			updatedAt: '5mins ago'
		},
		{
			id:'2',
			name: 'Marvin McKinney',
			image: boyProfile,
			content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
			emoji: '😞',
			totalComments: 12,
			createdAt: '5mins ago',
			updatedAt: '8mins ago'
		}
	];
}