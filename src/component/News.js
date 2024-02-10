import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {

  

  static defaultProps = {
    pageSize:5,
    country:"in",
    category:'general'

  }

  static propTypes = {
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,

  }

  articles =   []

  constructor(){
    super();
    this.state ={
      articles: [],
      loading:false,
      page:1,
      totalResults:0,
    }
  }

  updateNews =async ()=>{
    this.props.setProgress(10);
    const url=`https://newsapi.org/v2/top-headlines?Country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles:parsedData.articles,
      totalResults:parsedData.totalResults,
      loading:false,
    }) ;
    this.props.setProgress(100)
  }


  async componentDidMount(){

    // let url=`https://newsapi.org/v2/top-headlines?Country=${this.props.country}&category=${this.props.category}&apiKey=a63cbf398cfb465fbc1f638cd01cb791&page=1&pageSize=${this.props.pageSize}`;

    // this.setState({loading:true});
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({
    //   articles:parsedData.articles,
    //   totalResults:parsedData.totalResults,
    //   loading:false,
    // }) ;
    this.props.setProgress(10);
    this.updateNews();
    this.props.setProgress(100)
  }


  handlePrevClick = async ()=>{

      // console.log("valu of......."+this.state.page+1);
      // let url=`https://newsapi.org/v2/top-headlines?Country=${this.props.country}&category=${this.props.category}&apiKey=a63cbf398cfb465fbc1f638cd01cb791&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
      // this.setState({loading:true})
      // let data = await fetch(url);
      // let parsedData = await data.json();
      // this.setState({
      //   page:this.state.page-1,
      //   articles:parsedData.articles,
      //   loading:false,
      // })

      this.setState({page:this.state.page-1});
      this.updateNews();
  }


  handleNextClick =async ()=>{

    if(! (this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize))){
    //   console.log("valu of......."+this.state.page+1);

    //   console.log("Next click");
    // let url=`https://newsapi.org/v2/top-headlines?Country=${this.props.country}&category=${this.props.category}&apiKey=a63cbf398cfb465fbc1f638cd01cb791&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    //   this.setState({loading:true})
    //   let data = await fetch(url);
    //   let parsedData = await data.json();
      // this.setState({
      //   page:this.state.page+1,
      //   articles:parsedData.articles,
      //   loading:false,
      // })
      this.setState({page:this.state.page+1});
      this.updateNews();

    }
  }

  fetchMoreData=async ()=>{
    this.setState({page:this.state.page+1});
    const url=`https://newsapi.org/v2/top-headlines?Country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles:this.state.articles.concat(parsedData.articles),
      totalResults:parsedData.totalResults,
      loading:false,
    }) ;

  }



  render() {
    return (
      <div className='container my-3 p-2'>
        <h1 className='text-primary'><i className='fa fa-book-open text-dark'></i> NewsHunter - News Reader</h1>
        <hr />
        {/* {this.state.loading && <Spinner/>} */}


          <InfiniteScroll   dataLength={this.state.articles.length} next={this.fetchMoreData} hasMore={this.state.articles.length!==this.state.totalResults} loader={<Spinner/>}>
            <div className="container">
              <div className='row px-0'>

                {this.state.articles.map((element)=>{
                  return <div className="mx-auto col-sm-12 col-md-4 col-lg-3 p-2" key={element.url}>
                            <NewsItem key={element.url} source={!element.source?"NULL":element.source.name} title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                          </div>
                })}
              </div>
            </div>
          </InfiniteScroll>

        

      </div>
      
    )
  }
}

export default News