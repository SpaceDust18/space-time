import React from "react";
import "./ArticleRow.css";

function ArticleRow({ setSelectedArticleId, article }) {
    return (
        <div
            className="article-card"
            onClick={() => {
                setSelectedArticleId(article.id);
            }}
        >
            {article.image_url && (
                <img
                    src={article.image_url}
                    alt={`${article.title}`}
                    className="article-image"
                />
            )}

            <div className="article-details">
                <div>
                    <p className="article-title">{article.title}</p>
                </div>
                <div className="detail-item">
                    <strong>Summary:</strong><p>{article.summary}</p>
                    <strong>Article Link:</strong>
                    <p>
                        <a
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="article-link"
                        >
                            {article.url}
                        </a>
                    </p>

                    <strong>News Source:</strong>
                    <p>
                        {article.news_site && (article.news_site.startsWith("http://") || article.news_site.startsWith("https://")) ? (
                            <a
                                href={article.news_site}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="newsSite-link"
                            >
                                {article.news_site}
                            </a>
                        ) : (
                            // If it's not a valid URL, displays the name as plain text
                            <span>{article.news_site || "No URL available"}</span>
                        )}
                    </p>


                    <strong>Authors:</strong>
                    <p>{(article.authors && article.authors[0]?.name) || "Unknown"}</p>
                </div>
            </div>
        </div>
    );
}

export default ArticleRow
