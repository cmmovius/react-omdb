var React = require("react");
var ReactDOM = require("react-dom");

// React component definition.
// var Hello = React.createClass({
//   render: function(){
//     return (
//       <p>Hello world.</p>
//     );
//   }
// })
//
// ReactDOM.render(
//   <Hello />,
//   document.getElementById( "app" )
// );

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <h1>OMBD API</h1>
        <div>Container</div>
      </div>
    )
  }
});

ReactDOM.render(
  <Home />,
  document.getElementById("app")
);
