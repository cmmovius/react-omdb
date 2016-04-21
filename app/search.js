var React = require("react");

var Search = React.createClass({
  getInitialState: function() {
    return {
      movie: this.props.movie
    }
  },
  searchMovie: function() {
    prompt = prompt("Search for movie");
    this.setState({
      movie: prompt
    })
  },
  render: function() {
    return (
      <div>
        <input type="text" value={this.state.movie}/>
        <input type="submit" value="Inviting" onClick={this.searchMovie}/>
      </div>
    )
  }
});

module.exports = Search;
