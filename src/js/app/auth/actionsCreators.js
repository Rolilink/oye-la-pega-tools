// Crea un objecto llamdo API que tenga una funcion login(email,password) y retorna un promise
// En caso de que el promise sea success retornara como parametro el accessToken
// En caso de que sea error retornara un error

// Cuando el api retorna el accessToken genera la accion con la que se crea el token

// Documentacion
// Import on ES6: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/import
// Redux: http://redux.js.org/docs/basics/Actions.html
// Promises: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise

export function authenticateWithEmailAndPassword(email, password) {
  return (dispatch) => {
    // Logica Aqui
    dispatch(setSession(accessToken))
  }
};
