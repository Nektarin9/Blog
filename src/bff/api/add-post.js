import { currentDate } from '../utils';

export const addPost = ({imageUrl, title, content}) =>
	fetch('http://localhost:3005/posts', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			image_url: imageUrl,
			pulished_at: currentDate(),
			title,
			content,
		}),
	}).then((createdPost) => createdPost.json())
