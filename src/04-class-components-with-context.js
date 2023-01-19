/* --------------------------------------------------------------------------
 * APUNTES:
 * 		   En este archivo se demuestran las dos formas para aplicar un
 * 		   contexto a un componente de clase.
-------------------------------------------------------------------------- */

import { Component, createContext } from 'react';

// Contexto
const Context = createContext('Mi valor');

// Proveedor
const Provider = ({ children }) => {
	return <Context.Provider value="Otro valor">{children}</Context.Provider>;
};

// Componente
class MyComponent extends Component {
	// Primer método
	// static contextType = Context;

	render() {
		console.log(this.context);
		return <div>¡Hola Mundo!</div>;
	}
}

// Segundo método
MyComponent.contextType = Context;

const App = () => {
	return (
		<Provider>
			<MyComponent />
			<Context.Consumer>{(value) => <div>{value}</div>}</Context.Consumer>
		</Provider>
	);
};

export default App;
