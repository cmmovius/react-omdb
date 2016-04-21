var React = require("react");

var Search = React.createClass({
  render: function() {
    return (
      <div>
        <input type="text" value="Hello!"/>
        <input type="submit" value="Inviting"/>
      </div>
    )
  }
});

module.exports = Search;
