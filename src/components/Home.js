import React from "react";

class Home extends React.Component {
  constructor (props) {
    super(props);
    this.state = {"name": ""};
    this.updateValue = this.updateValue.bind(this);
  }
  updateValue (evt) {
    this.setState({"name": evt.target.value});
  }
  render () {
    return (<h1>Hello</h1>);
  }
}

export default Home;
