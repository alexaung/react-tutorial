import React from "react";

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articlesList: [],
      authorName: "",
      firstRequest: false,
    };
  }

  onChange = (event) => {
    this.setState({ authorName: event.target.value });
  };

  getApiUrlWithAuthor = (author) =>
    `https://jsonmock.hackerrank.com/api/articles?author=${author}&page=1`;

  fetchArticles = async () => {
    try {
      console.log(this.getApiUrlWithAuthor(this.state.authorName));
      const response = await fetch(
        this.getApiUrlWithAuthor(this.state.authorName)
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const articles = data.data.filter((article) => article.title != null);
      this.setState({ articlesList: articles, firstRequest: true });
    } catch (error) {
      this.setState({ error: error.toString() });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="controls">
          <div className="input-container">
            <span>author:</span>
            <input
              type="text"
              className="text-input"
              data-testid="text-input"
              onChange={this.onChange}
              name="authorName"
            />
            <button
              className="fetch-button"
              data-testid="fetch-button"
              onClick={this.fetchArticles}
            >
              Fetch
            </button>
          </div>
        </div>
        {this.state.articlesList.length > 0 ? (
          this.state.articlesList.slice(0, 3).map((el, i) => {
            return (
              <div key={i} className="results">
                <li key="example-key" data-testid="result-row">
                  {el.title}
                </li>
              </div>
            );
          })
        ) : this.state.firstRequest ? (
          <div data-testid="no-results">No results</div>
        ) : (
          ""
        )}
      </React.Fragment>
    );
  }
}

export default Articles;
