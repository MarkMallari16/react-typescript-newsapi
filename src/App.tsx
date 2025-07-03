import { useEffect, useState } from 'react'

import './App.css'
interface Articles {
  id: string,
  author: string;
  content: string;
  publishedAt: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string
}
function App() {
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
    <div className='lg:container lg:mx-auto mx-4'>
      <header>
        <h1 className='font-bold text-3xl mt-20 mb-10'>Latest News</h1>
      </header>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {
          newsLists.slice(0, 10).map((news) => (
            <div key={news.title} className='ring-1 ring-inset pb-5 ring-gray-300 rounded-lg'>
              <div>
                <a href={news.url} target='_blank' rel='noopener noreferrer'>
                  {news.urlToImage ? (
                    <img src={news.urlToImage} alt={news.url} className='w-full rounded-t-lg bg-fixed h-72 object-cover' />
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
                <div >
                  <div >
                    <h1 className='pt-3 text-2xl font-bold'>{news.title}</h1>
                    <p className='pt-4 text-gray-600 '>{news.description}</p>
                  </div>
                  <div className='flex items-center gap-6 pt-4'>
                    {news.author && (
                      <div className='flex items-center gap-1 text-gray-600'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                        {news.author}
                      </div>
                    )}
                    <div className='flex items-center gap-1 text-gray-600'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                      </svg>
                      <p className=''>{new Date(news.publishedAt).toLocaleDateString()}</p>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default App
