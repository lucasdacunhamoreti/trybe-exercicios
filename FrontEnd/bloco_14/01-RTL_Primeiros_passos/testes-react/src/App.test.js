import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// -----------------------------------------------------------

// ETAPAS DE TESTES

// Acessar os elementos da tela

// Interagir com os elementos (se for necessário)

// Fazer os testes


describe("Tela de inserção de email", () => {
  // O primeiro teste que podemos fazer, é verificar se um componente é renderizado na tela, por exemplo um input de email;
  // Primeiro definimos uma descrição para o teste a ser executado;
  it('Verifica se existe um input de email na tela', () => {
    // Acessar os elementos da tela
    render(<App />); // Recebe qual componente será renderizado (O render cria um navegador virtual);
    const inputEmail = screen.getAllByLabelText("Email"); // Pega o input de email que contém a label "Email";
    
    // Fazer os testes
    expect(inputEmail).toBeInTheDocument(); // Verifica se o inputEmail aparece no documento;
    expect(inputEmail.type).toBe("email"); // Verifica se o tipo do input é do tipo email;
  });

  // Teste para verificar se os botões são renderizados na tela;
  it("Verifica se existe dois botões na tela", () => {
    // Acessar os elementos da tela
    render(<App />);
    const buttons = screen.getAllByRole("button"); // Pega o elemento que tem a função de button(Se haver mais de um button, o teste irá quebrar usando getByRole);

    // Fazer os testes
    expect(buttons).toHaveLength(2); // O getAllByRole retorna um array, e esperamos que contém 2 elementos no array;
  });


  // Teste para verificar se o botão enviar é renderizado na tela;
  it("Verifica se existe o botão 'Enviar'", () => {
    // Acessar os elementos da tela
    render(<App />);
    const button = screen.getByTestId("id-send"); // Pega o elemento que contém o data-testid="id-send" no componente;

    // Fazer os testes
    expect(button).toBeInTheDocument();
    expect(button).toHaveValue("Enviar"); // Verifica se o value é "Enviar"
  })


  // Testando comportamento
  it("Verifica que ao digitar o 'Email' e clicar em 'Enviar', o email é renderizado", () => {
    // Acessar os elementos da tela
    render(<App />);
    const inputEmail = screen.getByLabelText("Email");
    const button = screen.getByTestId("id-send");
    const userEmail = screen.getByTestId("id-email-user");

    // Interagir com os elementos (se for necessário)
    //Para interagir com a aplicação, devemos importar o userEvent;
    userEvent.type(inputEmail, "teste@teste.com"); // Primeiro parâmentro é onde vai ser digitado, e o segundo o que vai ser digitado;
    userEvent.click(button);
    
    // Fazer os testes
    expect(inputEmail).toHaveValue("");
    expect(userEmail).toHaveTextContent("Valor: teste@teste.com");
  })
});