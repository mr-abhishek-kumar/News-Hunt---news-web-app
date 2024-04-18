import React  from 'react';

const NewsItem =(props)=> {

    let {title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
      <div>
        <div className="card mx-auto mb-4 " style={{width:"fit-content"}}>
            <div style={{display: "flex", justifyContent: "flex-end", position: "absolute", right: "0"}}>
              <span className=' badge rounded-pill bg-danger' >{source}</span>
            </div>
            <img src={!imageUrl?"https://content.api.news/v3/images/bin/039e4d50d91798f433c5ce61861a1d5b":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{!title?"Title":title}</h5>
                <p className="card-text">{!description?"Description of news":description}.</p>
                <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()} </small></p>
                <a rel='noreferrer' target='_blank' href={newsUrl} className="btn btn-primary btn-sm">Read More</a>
            </div>
        </div>   
      </div>
    )
  }

export default NewsItem