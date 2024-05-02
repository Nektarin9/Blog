import { useDispatch } from 'react-redux';
import { Icon } from '../../../../../components';
import { removeCommentAsync, openModal, CLOSE_MODAL } from '../../../../../actions';
import { useServerRequest } from '../../../../../hooks';
import styled from 'styled-components';

const CommentContainer = ({ className, postId, id, author, content, publishedAt }) => {
	const dispatch = useDispatch();
	const requestServer = useServerRequest();

	const onNewCommentRemove = (id) => {
		dispatch(
			openModal({
				text: 'Удалить комментраий?',
				onConfirm: () => {
					dispatch(removeCommentAsync(requestServer, postId, id));
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};
	return (
		<div className={className}>
			<div className="comment">
				<div className="information-panel">
					<div className="author">
						<Icon
							id="fa-user-circle-o"
							size="21px"
							margin="0 10px 0 0"
							onClick={() => {}}
						/>

						{author}
					</div>
					<div className="published-at">
						<Icon
							size="21px"
							id="fa-calendar-o"
							margin="0 10px 0 0"
							onClick={() => {}}
						/>

						{publishedAt}
					</div>
				</div>

				<div className="comment-text">{content}</div>
			</div>
			<Icon
				size="21px"
				id="fa-trash-o"
				margin="0 5px 0 10px"
				onClick={() => onNewCommentRemove(id)}
			/>
		</div>
	);
};

export const Comment = styled(CommentContainer)`
	display: flex;
	width: 100%;
	margin-top: 10px;
	& .comment {
		width: 100%;
		padding: 5px 10px;
		border: 1px solid black;
	}
	& .information-panel {
		display: flex;
		justify-content: space-between;
	}
	& .author {
		display: flex;
		align-items: center;
	}
	& .published-at {
		display: flex;
		align-items: center;
	}
`;
