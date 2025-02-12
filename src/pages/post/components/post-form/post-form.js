import { Icon, Input } from '../../../../components';
import { useLayoutEffect, useRef, useState } from 'react';
import { SpacialPanel } from '../special-panel/special-panel';
import { sanitizeContent } from './utils';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { savePostAsync } from '../../../../actions';
import { useServerRequest } from '../../../../hooks';
import styled from 'styled-components';
import { PROP_TYPE } from '../../../../constants';

const PostFormContainer = ({
	className,
	post: { id, title, imageUrl, content, publishedAt },
}) => {
	const [imageUrlValue, setImageUrlValue] = useState(imageUrl);
	const [titlelValue, setTitlelValue] = useState(title);
	const contentRef = useRef(null);

	useLayoutEffect(() => {
		setImageUrlValue(imageUrl);
		setTitlelValue(title);
	}, [imageUrl, title]);

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const requestServer = useServerRequest();

	const onSave = () => {
		const newContent = sanitizeContent(contentRef.current.innerHTML);
		dispatch(
			savePostAsync(requestServer, {
				id,
				imageUrl: imageUrlValue,
				title: titlelValue,
				content: newContent,
			}),
		).then(({ id }) => navigate(`/post/${id}`));
	};

	const onImageChange = ({ target }) => setImageUrlValue(target.value);
	const onTitleChange = ({ target }) => setTitlelValue(target.value);

	return (
		<div className={className}>
			<Input
				onChange={onImageChange}
				value={imageUrlValue}
				placeholder="Изображние..."
			/>
			<Input
				onChange={onTitleChange}
				value={titlelValue}
				placeholder="Заголовок..."
			/>
			<SpacialPanel
				id={id}
				publishedAt={publishedAt}
				margin="20px 0"
				editButtom={
					<Icon id="fa-floppy-o" onClick={onSave} margin="0 10px 0 0" />
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
		min-height: 80px;
		border: 1px solid black;
		white-space: pre-line;
	}
`;

PostForm.propTypes = {
	post: PROP_TYPE.POST.isRequired,
};
