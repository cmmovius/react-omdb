var React = require("react");
var ReactDOM = require("react-dom");
var Search = require("./search.js");

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <h1>OMBD API</h1>
        <div>
          <Search />
        </div>
      </div>
    )
  }
});

ReactDOM.render(
  <Home />,
  document.getElementById("app")
);
