import { Button, Icon } from '../../../index';
import { useSelector, useDispatch } from 'react-redux';
import {
	selectUserRole,
	selectUserLogin,
	selectUserSession,
} from '../../../../selectirs';
import { ROLE } from '../../../../constants';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../../../actions';
import styled from 'styled-components';

const ControlPanelContainer = ({ className }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const roleId = useSelector(selectUserRole);
	const login = useSelector(selectUserLogin);
	const session = useSelector(selectUserSession);

	return (
		<div className={className}>
			<RightAligned>
				{roleId === ROLE.GUEST ? (
					<Button>
						<Link to={'/login'}>Войти</Link>
					</Button>
				) : (
					<>
						<UserName>{login}</UserName>
						<StyleIcon>
							<Icon
								id="fa-sign-out"
								margin="0 0 0 10px"
								onClick={() => dispatch(logout(session))}
							/>
						</StyleIcon>
					</>
				)}
			</RightAligned>
			<RightAligned>
				<StyleIcon onClick={() => navigate(-1)}>
					<Icon id="fa-backward" margin="10px 0 0 0" />
				</StyleIcon>

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

const StyleIcon = styled.div`
	&:hover {
		cursor: pointer;
	}
`;

const RightAligned = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;
const UserName = styled.div`
	font-size: 18px;
	font-weight: bold;
`;
export const ControlPanel = styled(ControlPanelContainer)``;
