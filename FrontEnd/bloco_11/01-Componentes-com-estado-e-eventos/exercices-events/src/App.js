import React from "react";

class App extends React.Component {
  constructor() {
    super()
    this.handleClick1 = this.handleClick1.bind(this)
    this.state = {
      numeroDeCliques: 0
    }
  }

  handleClick1() {
    this.setState((estadoAnterior, _props) =>({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
  }

  render() {
    // console.log(this);
    return (<button onClick={ this.handleClick1 }>{this.state.numeroDeCliques}</button>);
  }
}

export default App;
