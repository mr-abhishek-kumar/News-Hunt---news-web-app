import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

import InfiniteScroll from 'react-infinite-scroll-component';

const News =(props)=> {

  const [articles, setArticles] = useState([])
  // const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, seTotalResults] = useState(0)

  // articles =   []



  const updateNews = async ()=>{
    props.setProgress(10);
    const url=`https://newsapi.org/v2/top-headlines?Country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    // setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    seTotalResults(parsedData.totalResults);
    // setLoading(false);
    props.setProgress(100)
  }


  useEffect(() => {
    updateNews();
    //eslint-disable-next-lined
  }, [])
  


  const fetchMoreData=async ()=>{
    const url=`https://newsapi.org/v2/top-headlines?Country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)

    let data = await fetch(url);
    let parsedData = await data.json();

    setArticles(articles.concat(parsedData.articles));
    seTotalResults(parsedData.totalResults);

  }




    return (
      <div className='container my-3 p-2'>
        <h1 className='text-primary mt-5'><i className='fa fa-book-open text-dark'></i> NewsHunter - News Reader</h1>
        <hr />

          <InfiniteScroll   dataLength={articles.length} next={fetchMoreData} hasMore={articles.length!==totalResults} loader={<Spinner/>}>
            <div className="container">
              <div className='row px-0'>

                {articles.map((element)=>{
                  return <div className="mx-auto col-sm-12 col-md-4 col-lg- p-2" key={element.url}>
                            <NewsItem key={element.url} source={!element.source?"NULL":element.source.name} title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                          </div>
                })}
              </div>
            </div>
          </InfiniteScroll>

        

      </div>
      
    )
  }


News.defaultProps = {
  pageSize:5,
  country:"in",
  category:'general'

}

News.propTypes = {
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string,

}

export default News