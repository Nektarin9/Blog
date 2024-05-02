import { Icon } from '../../../../components';
import styled from 'styled-components';

const SpacialPanelConteiner = ({ className, publishedAt, editButtom }) => {
	return (
		<div className={className}>
			<div className="published-at">
				<Icon id="fa-calendar-o" margin="0 7px 0 0" onClick={() => {}} />

				{publishedAt}
			</div>
			<div className="buttons">
				{editButtom}
				<Icon id="fa-trash-o" onClick={() => {}} />
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
