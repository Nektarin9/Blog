import { Icon } from '../../../../components';
import { useDispatch } from 'react-redux';
import { openModal, CLOSE_MODAL, removePostAsync } from '../../../../actions';
import { useServerRequest } from '../../../../hooks';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SpacialPanelConteiner = ({ id, className, publishedAt, editButtom }) => {
	const dispatch = useDispatch();
	const requestServer = useServerRequest();
	const navigate = useNavigate();
	const onPostRemove = (id) => {
		dispatch(
			openModal({
				text: 'Удалить статью?',
				onConfirm: () => {
					dispatch(removePostAsync(requestServer, id)).then(() => {
						navigate('/');
					});
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};
	return (
		<div className={className}>
			<div className="published-at">
				{publishedAt && <Icon inactive={true} margin="0 7px 0 0" id="fa-calendar-o" />}

				{publishedAt}
			</div>
			<div className="buttons">
				{editButtom}
				{publishedAt && (
					<Icon
						id="fa-trash-o"
						margin="0 0 0 7px"
						onClick={() => onPostRemove(id)}
					/>
				)}
			</div>
		</div>
	);
};

export const SpacialPanel = styled(SpacialPanelConteiner)`
	display: flex;
	justify-content: space-between;
	margin: ${({ margin }) => margin};

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
`;
