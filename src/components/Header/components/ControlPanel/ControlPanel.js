import { Icon } from '../../../icon/icon';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ControlPanelContainer = ({ className }) => {
	const navigate = useNavigate();
	return (
		<div className={className}>
			<RightAligned>
				<StyledLink to={'/login'}>Войти</StyledLink>
			</RightAligned>
			<RightAligned>
				<StyleButton onClick={() => navigate(-1)}>
					<Icon id="fa-backward" margin="10px 0 0 0" />
				</StyleButton>

				<Link to={'/post'}>
					<Icon id="fa-file-text-o" margin="10px 0 0 16px" />
				</Link>
				<Link to={'/users'}>
					<Icon id="fa-users" margin="10px 0 0 16px" />
				</Link>
			</RightAligned>
		</div>
	);
};

const StyleButton = styled.div`
	&:hover {
		cursor: pointer;
	}
`

const RightAligned = styled.div`
	display: flex;
	justify-content: flex-end;
`;
const StyledLink = styled(Link)`
	font-size: 18px;
	width: 100px;
	height: 32px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #eee;
	border: 1px solid black;
`;

export const ControlPanel = styled(ControlPanelContainer)``;
