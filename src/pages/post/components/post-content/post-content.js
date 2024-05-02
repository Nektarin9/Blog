import { H2 } from '../../../../components';
import { Icon } from '../../../../components';
import styled from 'styled-components';

const PostContentContainer = ({
	className,
	post: { id, title, imageUrl, content, publishedAt },
}) => {
	return (
		<div className={className}>
			<img src={imageUrl} alt={title}></img>
			<H2>{title}</H2>
			<div className="special-panel">
				<div className="published-at">
					<Icon id="fa-calendar-o" margin="0 7px 0 0" onClick={() => {}} />

					{publishedAt}
				</div>
				<div className="buttons">
					<Icon id="fa-trash-o" margin="0 10px 0 0" onClick={() => {}} />
					<Icon id="fa-pencil-square-o" onClick={() => {}} />
				</div>
			</div>

			<div className="post-text">{content}</div>
		</div>
	);
};

export const PostContent = styled(PostContentContainer)`
	& img {
		float: left;
		margin: 0 20px 10px 0;
	}
	& .special-panel {
		display: flex;
		justify-content: space-between;
		margin: -20px 0 20px;

	}
	& .published-at {
		display: flex;
		font-size: 18px;

	}
	& i {
		position: relative;
		top: -5px;
	}
	& .buttons {
		display: flex;
		font-size: 18px;

	}
	& .post-text {
		font-size: 18px;
	}
`;
