const peca = 'rei';

switch (peca.toLowerCase()) {
  case 'bispo':
    console.log('Move-se na diagonal, quantas casas quiser.');
    break;

  case 'rei':
    console.log('Pode mover-se em qualquer direção, porém apenas uma casa por vez, como indicam os pontos vermelhos na figura abaixo.');
    break;

  case 'dama':
    console.log('Assim como o Rei, pode mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres.');
    break;

  case 'torre':
    console.log('Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.');

  case 'cavalo':
    console.log('Ele pode andar duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal, uma na horizontal e duas na vertical, e assim por diante.');
    break;

  case 'peao':
    console.log('Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas.');
    break;

  default:
    console.log('Peça inválida');
    break;
}