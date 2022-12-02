import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import NewsItem from './NewsItem'

export default class News extends Component {
 constructor(){
  super()
  console.log("hello i am constructor from news.js")
 }
  render() {
    return (
      
       <div className='container my-3'>
       <h2>Top Headlines - NewsMonk</h2>
        <div className='row'>
        <div className='col-md-4'>
          <NewsItem title ="my title" description="my descrip" />
        </div>
        <div className='col-md-4'>
        <NewsItem title ="my title" description="my descrip" />
        </div>
        <div className='col-md-4'>
        <NewsItem title ="my title" description="my descrip" />
        </div>
        </div>
       </div>
      
    )
  }
}
