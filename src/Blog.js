import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header, Footer } from './components';
import { Authorization, Registration, Users } from './pages';
import { styled } from 'styled-components';

const Page = styled.div`
	padding: 120px 0;
`;

const AppColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 1000px;
	height: 100%;
	margin: 0 auto;
	background-color: white;
`;

export const Blog = () => {
	return (
		<>
			<AppColumn>
				<Header />
				<Page>
					<Routes>
						<Route path="/" element={<div>Главная страница</div>} />
						<Route path="/login" element={<Authorization />} />
						<Route path="/register" element={<Registration />} />
						<Route path="/users" element={<Users />} />
						<Route path="/post" element={<div>Новая статься</div>} />
						<Route path="/post/:post_id" element={<div>Статься</div>} />
						<Route path="*" element={<div>Ошибка</div>} />
					</Routes>
				</Page>
				<Footer />
			</AppColumn>
		</>
	);
};
