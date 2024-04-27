import { H2 } from '../h2/h2';
import styled from 'styled-components';

export const Content = ({ children, error }) =>
	error ? (
		<>
			<Div>
				<H2>Ошибка</H2>
				<div>{error}</div>
			</Div>
		</>
	) : (
		children
	);

const Div = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
