/* --------------------------------------------------------------------------
 * APUNTES:
 * 		   En este archivo se demuestra como aplicar multiples contextos a
 * 		   un componente de clase.
-------------------------------------------------------------------------- */

import { Component, createContext } from 'react';

// Contextos
const Context1 = createContext('Mi contexto 1');
const Context2 = createContext('Mi contexto 2');

// Proveedor
const Provider = ({ children }) => {
	return (
		<Context1.Provider value="Valor 1">
			<Context2.Provider value="Valor 2">{children}</Context2.Provider>
		</Context1.Provider>
	);
};

// Componente
class MyComponent extends Component {
	render() {
		return (
			<Context1.Consumer>
				{(value1) => (
					<Context2.Consumer>
						{(value2) => <div>{`${value1} ${value2}`}</div>}
					</Context2.Consumer>
				)}
			</Context1.Consumer>
		);
	}
}

const App = () => {
	return (
		<Provider>
			<MyComponent />
		</Provider>
	);
};

export default App;
