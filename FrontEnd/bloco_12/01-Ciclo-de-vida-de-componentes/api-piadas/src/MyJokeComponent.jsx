import React from "react";

class MyJokeComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      piada:'Minha piada',
    };
  }

  componentDidMount() {
    
  }

  render() {
    return (<span>{ this.state.piada }</span>);
  }
}

export default MyJokeComponent;