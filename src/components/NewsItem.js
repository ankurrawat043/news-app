import React, { Component } from 'react'
//import PropTypes from 'prop-types'
//import { getByTitle } from '@testing-library/react'

export default class NewsItem extends Component {
 

  render() {
  let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
           <img src={imageUrl?imageUrl:"https://newsmonks.com/wp-content/uploads/2018/11/NewsMonks-New-Logo-e1542289417537.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
           <h5 className="card-title">{title}...</h5>
           <p className="card-text">{description}...</p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
           </div>
         </div>
      </div>
    )
  }
}
