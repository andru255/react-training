import React, {Component} from "react";
import ReactDOM from "react-dom";

class SingleComponent extends Component{
  render(){
    return <div>Hi! I'm a Single Component</div>
  };
};

ReactDOM.render(
  <SingleComponent />,
  document.getElementById("root")
);
