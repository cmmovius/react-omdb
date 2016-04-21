var React = require("react");
var ReactDOM = require("react-dom");

// React component definition.
var Hello = React.createClass({
  render: function(){
    return (
      <p>Hello world.</p>
    );
  }
})

ReactDOM.render(
  <Hello />,
  document.getElementById( "app" )
);
