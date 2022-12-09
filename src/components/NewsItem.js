import React, { Component } from 'react'
//import PropTypes from 'prop-types'
//import { getByTitle } from '@testing-library/react'

export default class NewsItem extends Component {
 

  render() {
  let {title, description, imageUrl, newsUrl,date,author,source} = this.props;
    return (
      <div className='my-3'>
        <div className="card" >
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left: '20%',zIndex: 1}}>{source}</span>
           <img src={imageUrl?imageUrl:"https://newsmonks.com/wp-content/uploads/2018/11/NewsMonks-New-Logo-e1542289417537.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
           <h5 className="card-title">{title}</h5>
           <p className="card-text">{description}</p>
           <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()} </small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
           </div>
         </div>
      </div>
    )
  }
}
