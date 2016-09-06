import React, {Component, PropTypes} from "react";
import ReactDOM from "react-dom";

class SingleComponentA extends Component{
  constructor(){
    super();
    this.state = {
      name: "ComponentA"
    }
  };
  render(){
    return <div>Hi! I'm a Single Component with name {this.state.name}</div>
  };
};

class SingleComponentB extends Component{
  constructor(){
    super();
    this.state = {
      changed: false
    };
    this.handleClick = this.handleClick.bind(this);
  };
  handleClick(){
    this.setState({ changed: !this.state.changed });
  };
  render(){
    const text = this.state.changed ? "changed! :)": "no changed :/";
    return (<div onClick={this.handleClick}>
       I'm Component B with name: {this.props.name}, and I {text} ?
    </div>)
  };
};

//Validating the prop
SingleComponentB.propTypes = {
  name: PropTypes.number
};


ReactDOM.render(
  <div>
    <SingleComponentA name="ComponentA"/>
    <SingleComponentB name={2}/>
  </div>,
  document.getElementById("root")
);
