import React from 'react';

const API_URL = "https://jsonmock.hackerrank.com/api/articles";

class Articles extends React.Component {
  constructor(){
    super();
    this.state={
      data:[],
      total_pages:1,
      error: null,
      currentPage: 1,
      buttons: []
    }
  }
  
  fetchArticles = async (pageno) => {
    try {
      const response = await fetch(`${API_URL}?page=${pageno}`);
      const obj = await response.json();
      const filteredData = obj?.data.filter((res) => res.title);
      this.setState({data:filteredData,total_pages:obj.total_pages, error: null});
    } catch(error) {
      this.setState({error: error.message});
    }
  }
  
  componentDidMount(){
    this.fetchArticles(this.state.currentPage);
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentPage !== this.state.currentPage) {
      this.fetchArticles(this.state.currentPage);
    }
    if (prevState.total_pages !== this.state.total_pages) {
      const buttons = [...Array(this.state.total_pages)].fill().map((_, index)=> index+1);
      this.setState({buttons});
    }
  }

  handlePageChange = (pageNum) => {
    this.setState({currentPage: pageNum});
  }
  
  render() {
    const { data, buttons, error } = this.state;
    return (
      <React.Fragment>
        {error && <p>{error}</p>}
        <div className="pagination">
          {
            buttons.map((num)=> (
              <button 
                data-testid="page-button" 
                key={`page-button-${num}`} 
                onClick={() => this.handlePageChange(num)}>
                {num}
              </button>
            ))
          }
        </div>
        <ul className="results">
          {
            data.map((obj)=>(
              <li key={`${obj.title}`} data-testid="result-row">{obj.title}</li>
            ))
          }
        </ul>
      </React.Fragment>
    );
  }
}

export default Articles;
