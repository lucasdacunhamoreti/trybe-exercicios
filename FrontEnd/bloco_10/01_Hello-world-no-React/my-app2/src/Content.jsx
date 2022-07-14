import React from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render() {
    const teste = conteudos.map((content) => {
      const {conteudo, bloco, status} = content;

      return <div className="content" key={content}>
        <p>O conteúdo é: {conteudo}</p>
        <p>Status: {status}</p>
        <p>Bloco: {bloco}</p>
        <hr />
      </div>
    }) 
    return teste;
  }
}

export default Content