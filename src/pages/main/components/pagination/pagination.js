import { Button } from '../../../../components';
import styled from 'styled-components';

const PaginationContainer = ({ className, page, setPage, lastPage }) => {
	return (
		<div className={className}>
			<Button disabled={page === 1} onClick={() => setPage(1)}>
				В начало
			</Button>
			<Button disabled={page === 1} onClick={() => setPage(page - 1)}>
				Предыдущая
			</Button>
			<div className="current-page">Страница: {page}</div>
			<Button disabled={page === lastPage} onClick={() => setPage(page + 1)}>
				Следующая
			</Button>

			<Button disabled={page === lastPage} onClick={() => setPage(lastPage)}>
				В конец
			</Button>
		</div>
	);
};

export const Pagination = styled(PaginationContainer)`
	display: flex;
	justify-content: center;
	margin: 10px 0;
	padding: 0 0 20px;
	& button {
		margin: 0 5px;
	}
	& .current-page {
		width: 100%;
		font-size: 18px;
		font-weight: 500;
		height: 32px;
		line-height: 26px;
		text-align: center;
		border: 1px solid black;
	}
`;
