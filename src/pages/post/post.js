import { useEffect, useLayoutEffect, useState } from 'react';
import { useMatch, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { PostContent, Comments, PostForm } from './components';
import { Error, PrivateContent } from '../../components';
import { useServerRequest } from '../../hooks';
import { loadPostAsync, RESET_POST_DATA } from '../../actions';
import { selectPost } from '../../selectirs';
import { ROLE } from '../../constants';
import styled from 'styled-components';

const PostContainer = ({ className }) => {
	const [error, setError] = useState(null);
	const dispatch = useDispatch();
	const post = useSelector(selectPost);

	const params = useParams();
	const [isLodaging, setIsLoading] = useState(true);
	const isCreating = !!useMatch('/post');
	const isEditing = !!useMatch('/post/:id/edit');

	const requestServer = useServerRequest();

	useLayoutEffect(() => {
		dispatch(RESET_POST_DATA);
	}, [dispatch, isCreating]);

	useEffect(() => {
		if (isCreating) {
			setIsLoading(false);
			return;
		}
		dispatch(loadPostAsync(requestServer, params.id)).then((postData) => {
			setError(postData.error);
			setIsLoading(false);
		});
	}, [requestServer, dispatch, params.id, isCreating]);

	if (isLodaging) {
		return null;
	}

	const SpecificPostPage =
		isCreating || isEditing ? (
			<PrivateContent access={[ROLE.ADMIN]} serverError={error}>
				<div className={className}>
					<PostForm post={post} />
				</div>
			</PrivateContent>
		) : (
			<div className={className}>
				<PostContent post={post} />
				<Comments comments={post.comments} postId={post.id} />
			</div>
		);
	return error ? <Error error={error} /> : SpecificPostPage;
};

export const Post = styled(PostContainer)`
	height: 100%;
	padding: 0 80px;
	margin: 40px 0;
	background-color: white;
`;
