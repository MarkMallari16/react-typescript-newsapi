import React from 'react'
interface Article {
    id: string,
    author: string;
    content: string;
    source: object;
    publishedAt: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string
}
const Article = () => {
    return (
        <div>Artcle</div>
    )
}

export default Article