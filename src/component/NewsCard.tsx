import { useState } from "react";

interface Source {
    id: string;
    name: string;
}
interface Article {
    id: string,
    author: string;
    content: string;
    source: Source;
    publishedAt: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string
}

interface NewsCardProps {
    article: Article;
}
const NewsCard = ({ article }: NewsCardProps) => {
    const [isViewDescription, setIsViewDescription] = useState<boolean>(false);

    const viewDesciption = () => {
        setIsViewDescription(!isViewDescription)
    }
    return (
        <div className='border border-gray-200 shadow-2xs rounded-xl pb-5'>
            <div>
                <a href={article.url} target='_blank' rel='noopener noreferrer'>
                    {article.urlToImage ? (
                        <>


                            <img src={article.urlToImage} alt={article.url} className='w-full rounded-t-lg bg-fixed h-72 object-cover' />
                        </>
                    ) : (
                        <div className='flex justify-center text-gray-500'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-64">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                        </div>
                    )}
                </a>
            </div>
            <div className='px-4 pt-4'>
                <div className="">
                    <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium border border-gray-800 text-gray-800">{article.source.name}</span>
                    <div >
                        <h1 className='pt-3 text-2xl font-bold'>{article.title}</h1>
                        <p className='pt-4 text-gray-600 inline-flex'>{!isViewDescription ? `${article?.description ? article.description.slice(0, 40) : ""}...` : article.description}</p>
                        {article?.description && <button className="cursor-pointer text-gray-600" onClick={viewDesciption}>{isViewDescription ? 'see less' : 'see more'}</button>}
                    </div>
                    <div className='flex items-center gap-6 pt-4'>
                        {article.author && (
                            <div className='flex items-center gap-1 text-gray-600'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                                {article.author}
                            </div>
                        )}
                        <div className='flex items-center gap-1 text-gray-600'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                            </svg>
                            <p className=''>{new Date(article.publishedAt).toLocaleDateString()}</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default NewsCard