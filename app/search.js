var React = require("react");

var Search = React.createClass({
  getInitialState: function() {
    return {
      movie: this.props.movie
    }
  },
  render: function() {
    return (
      <div>
        <input type="text" value={this.state.movie}/>
        <input type="submit" value="Inviting"/>
      </div>
    )
  }
});

module.exports = Search;
