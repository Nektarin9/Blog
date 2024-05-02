import { Icon, Input } from '../../../../components';
import { useRef } from 'react';
import { SpacialPanel } from '../special-panel/special-panel';
import { sanitizeContent } from './utils';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { savePostAsync } from '../../../../actions';
import { useServerRequest } from '../../../../hooks';
import styled from 'styled-components';

const PostFormContainer = ({
	className,
	post: { id, title, imageUrl, content, publishedAt },
}) => {
	const imageRef = useRef(null);
	const titleRef = useRef(null);
	const contentRef = useRef(null);
	const requestServer = useServerRequest();

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const onSave = () => {
		const newImage = imageRef.current.value;
		const newTitle = titleRef.current.value;
		const newContent = sanitizeContent(contentRef.current.innerHTML);
		dispatch(
			savePostAsync(requestServer, {
				id,
				imageUrl: newImage,
				title: newTitle,
				content: newContent,
			}),
		).then(() => navigate(`/post/${id}`));
	};
	return (
		<div className={className}>
			<Input ref={imageRef} defaultValue={imageUrl} placeholder="Изображние..." />
			<Input ref={titleRef} defaultValue={title} placeholder="Заголовок..." />
			<SpacialPanel
				publishedAt={publishedAt}
				margin="20px 0"
				editButtom={
					<Icon id="fa-floppy-o" margin="0 10px 0 0" onClick={onSave} />
				}
			/>
			<div
				ref={contentRef}
				contentEditable={true}
				suppressContentEditableWarning
				className="post-text"
			>
				{content}
			</div>
		</div>
	);
};

export const PostForm = styled(PostFormContainer)`
	& img {
		float: left;
		margin: 0 20px 10px 0;
	}

	& .post-text {
		font-size: 18px;
		white-space: pre-line;
	}
`;
