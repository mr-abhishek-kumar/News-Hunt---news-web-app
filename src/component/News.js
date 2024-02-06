import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

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
    }
  }

  updateNews =async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?Country=${this.props.country}&category=${this.props.category}&apiKey=a63cbf398cfb465fbc1f638cd01cb791&page=1&pageSize=${this.props.pageSize}`;

    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles:parsedData.articles,
      totalResults:parsedData.totalResults,
      loading:false,
    }) ;
  }


  async componentDidMount(){

    let url=`https://newsapi.org/v2/top-headlines?Country=${this.props.country}&category=${this.props.category}&apiKey=a63cbf398cfb465fbc1f638cd01cb791&page=1&pageSize=${this.props.pageSize}`;

    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles:parsedData.articles,
      totalResults:parsedData.totalResults,
      loading:false,
    }) ;
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



  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-primary'><i className='fa fa-book-open text-dark'></i> NewsHunter - News Reader</h1>
        <hr/>
        {this.state.loading && <Spinner/>}
        <div className="row">

          {!this.state.loading && this.state.articles.map((element)=>{
            return <div className="mx-auto col-lg-3 col-md-4 col-sm-12 my-2" key={element.url}>
                      <NewsItem source={element.source.name} title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                    </div>
          })}

        </div>
        <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type='button' className='btn btn-sm btn-dark' onClick={this.handlePrevClick}> &larr; Previous</button>
            <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type='button' className='btn btn-sm btn-dark' onClick={this.handleNextClick} >Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News