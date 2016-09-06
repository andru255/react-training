import React, {Component, PropTypes} from "react";
import ReactDOM from "react-dom";

class SingleComponentA extends Component{
  render(){
    return <div>Hi! I'm a Single {this.props.name}</div>
  };
};


class SingleComponentB extends Component{
  render(){
    return <div>Hi! I'm a Single {this.props.name}</div>
  };
};

//Validating the prop
SingleComponentB.propTypes = {
  name: PropTypes.number
};


ReactDOM.render(
  <div>
    <SingleComponentA name="ComponentA"/>
    <SingleComponentB name={1}/>
  </div>,
  document.getElementById("root")
);
