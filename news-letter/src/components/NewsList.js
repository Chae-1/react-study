import styled from 'styled-components';
import NewsItem from './NewsItem';
import { useEffect, useState } from 'react';
import axios from 'axios';
import usePromise from '../libs/usePromise';

const NewsListBlock = styled.div`
	box-sizing: border-box;
	padding-bottom: 3rem;
	width: 768px;
	margin: 0 auto;
	margin-top: 2rem;
	@media screen and (max-width: 768px) {
		width: 100%;
		padding-left: 1rem;
		padding-right: 1rem;
	}
`;

const NewsList = ({ category }) => {
	const [loading, response, error] = usePromise(() => {
		const query = category === 'all' ? '' : `&category=${category}`;
		return axios.get(
			`https://newsapi.org/v2/top-headlines/sources?country=us${query}&apiKey=97e7ffc45691457bb6c39b22b4ac5d67`,
		);
	}, [category]);

	if (loading) {
		return <NewsListBlock>대기중...</NewsListBlock>;
	}

	if (!response) {
		return null;
	}

	console.log(response.data);
	const articles = response.data.sources;

	return (
		<NewsListBlock>
			{articles.map((article) => {
				return <NewsItem key={article.url} article={article}></NewsItem>;
			})}
		</NewsListBlock>
	);
};

export default NewsList;
