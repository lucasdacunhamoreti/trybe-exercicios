import React from "react";

class EstadoFavorito extends React.Component {
  render() {
    const { value,handleChange } = this.props;

    let error = undefined
    if(value.length > 120)error = "Texto muito grande!"

    return (
    <label>
      Diga qual é seu estado favorito! Do Brasil ou od React, você quem sabe!
      <textarea name="estadoFavorito" value={value} onChange={handleChange}></textarea> 
      <span>{error ? error : ''}</span>
    </label>
    )
  }
}

export default EstadoFavorito