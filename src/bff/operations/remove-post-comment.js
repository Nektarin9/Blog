import { deleteComment, getPost } from '../api';
import { getPostCommentsWithAuthor } from '../utils';
import { ROLE } from '../constants';
import { sessions } from '../sessions';
export const removePostComment = async (hash, postId, id) => {
	const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR];
	const access = await sessions.access(hash, accessRoles);

	if (!access) {
		return {
			error: 'Доступ запрещен',
			res: null,
		};
	}
	await deleteComment(id);
	const post = await getPost(postId);
	const commentsWichAuthor = await getPostCommentsWithAuthor(postId);

	return {
		error: null,
		res: { ...post, comments: commentsWichAuthor },
	};
};
