import { currentDate } from '../utils';

export const addComment = (userId, postId, content) =>
	fetch('http://localhost:3005/comments', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			author_id: userId,
			post_id: postId,
			pulished_at: currentDate(),
			content,
		}),
	})
