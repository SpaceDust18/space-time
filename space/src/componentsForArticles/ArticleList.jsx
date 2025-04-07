import React, { useState } from "react";
import { useEffect } from "react";
import ArticleRow from "./ArticleRow"


function ArticleList({ setSelectedArticleId, articles, setArticles }) {


    useEffect(() => {
        async function fetchArticles() {
            try {
                const response = await fetch(
                    'https://api.spaceflightnewsapi.net/v4/articles/')
                const result = await response.json();
                setArticles(result.results);
                console.log(result.results)

            } catch (error) {
                console.error(error);
            }
        }
        fetchArticles()
    }, [])
    return (
        <>
            <div className="article-list">
                {articles &&
                    articles.map((article) => (
                        <ArticleRow
                            key={article.id}
                            article={article}
                            setSelectedArticleId={setSelectedArticleId}
                        />
                    ))}
            </div>
        </>
    );
}
export default ArticleList