import React, { Component } from "react";
import Loading from "./Loading";
import PropTypes from 'prop-types'
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps={
     pageSize: 8,
     country: "in",
     category: "business"
  }
  static propTypes={
     country: PropTypes.string,
     pageSize: PropTypes.number,
     category: PropTypes.string,
  }
  constructor() {
    super();

    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
  }
  async updateNews(){
    this.props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=449a63e58fb140048da33d4e735137d5&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);

    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
    this.props.setProgress(100);
  }
  async componentDidMount() {
    this.updateNews();
  }
  /*handleNextClick = async () => {
    
    this.setState({page: this.state.page + 1});
    this.updateNews();
  };*/

  /*handlePrevClick = async () => {
  
    this.setState({page: this.state.page - 1});
    this.updateNews();
  };*/
  fetchMoreData = async () => {
       
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=449a63e58fb140048da33d4e735137d5&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({ page: this.state.page + 1});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      
    });
  }
  render() {
    return (
     <> 
        <h1 className="text-center" style={{margin: '90px 35px 0 0'}} >Top Headlines - NewsMonk</h1>
       { this.state.loading && <Loading/>}
       <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Loading/>}
        >
<div className="container my-3">
        <div className="row">
          { this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  date={element.publishedAt}
                  author={element.author}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
        </div>
        </InfiniteScroll>

       {/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            Pervious
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next
          </button>
        </div>*/}
      </>
    );
  }
}
