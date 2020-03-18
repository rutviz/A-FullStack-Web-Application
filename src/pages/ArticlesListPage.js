import React from 'react';   
import articleContent from './article-content';
import ArticlesList from '../components/ArticlesList';
import ArticleList from '../components/ArticlesList';

const ArticlesListPage = () => (
    <>
    <h1>Articles</h1>
    <ArticleList articles={articleContent}></ArticleList>
    </>
);

export default ArticlesListPage;