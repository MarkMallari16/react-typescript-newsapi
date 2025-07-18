import NewsCard from '../component/NewsCard';
import { useEffect, useState } from 'react'

interface Source {
    id: string;
    name: string;
}
interface Articles {
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
const Home = () => {
    //storing news lists
    const [newsLists, setNewsLists] = useState<Articles[]>([]);

    const fetchNewsAPI = async () => {
        try {
            //fetching from news api
            const apiKey: string = import.meta.env.VITE_NEWS_API_KEY;
            const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);

            const data = await response.json();
            console.log(data)
            setNewsLists(data.articles);
        } catch (error) {
            console.error(error)
        }
    }

    //creating side effects
    useEffect(() => {
        fetchNewsAPI();
    }, [])

    return (
        <>
            <header>
                <h1 className='font-bold text-3xl mt-10 mb-6'>Latest News</h1>
            </header>
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    newsLists.map((news) => (
                        <NewsCard key={news.title} article={news} />
                    ))
                }
            </section>
        </>
    )
}

export default Home