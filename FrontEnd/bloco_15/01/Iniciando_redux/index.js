// Importa o Redux.
const Redux = require('redux');

const fazerLogin = (email) => ({
  type: "LOGIN",
  email});

// Define o estado inicial da store.
const ESTADO_INICIAL = {
  login: false,
  email: "",
  };

const reducer = (state = ESTADO_INICIAL) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        login: !state.login,
        email: action.email,
      };
    default: // No switch, sempre precisamos ter um caso default!
      return state;
    }
  };
  
  // Importa o Store do Redux.
  const store = Redux.createStore(reducer);

  store.dispatch(fazerLogin("alguem@email.com"));

  console.log(store.getState());

