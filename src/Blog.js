import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { styled } from 'styled-components';

const Content = styled.header`
	padding: 120px 0;
`;
const H2 = styled.h2`
	text-align: center;
`

const Header = () => <div>Шапка</div>;
const Footer = () => <footer>Футер</footer>;

export const Blog = () => {
	return (
		<>
			<Header />
			<Content>
				<H2>Контент страницы</H2>
				<Routes>
					<Route path="/" element={<div>Главная страница</div>} />
					<Route path="/login" element={<div>Авторизация</div>} />
					<Route path="/register" element={<div>Регистрация</div>} />
					<Route path="/users" element={<div>Пользователи</div>} />
					<Route path="/post" element={<div>Новая статься</div>} />
					<Route path="/post/:post_id" element={<div>Статься</div>} />
					<Route path="*" element={<div>Ошибка</div>} />



				</Routes>
			</Content>
			<Footer />
		</>
	);
};
