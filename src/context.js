/* --------------------------------------------------------------------------
 * APUNTES:
 * 		   Los contextos en React deben ser utilizados para pasar datos que
 * 		   no cambian o que lo hacen muy de vez en cuando, entre componentes.
-------------------------------------------------------------------------- */

import { createContext, useContext } from 'react';

// Inicializo los contextos
const Context1 = createContext('Valor por defecto');
const Context2 = createContext('Valor por defecto 2');

// Componente que provee los nuevos datos del contexto 1
const Provider1 = ({ children }) => {
	return <Context1.Provider value={'Mi valor'}>{children}</Context1.Provider>;
};

// Componente que utiliza el contexto 1
const MyComponent1 = () => {
	const ctx = useContext(Context1);
	return <div>{ctx}</div>;
};

// Componente que utiliza el contexto 2
const MyComponent2 = () => {
	const ctx = useContext(Context2);
	return <div>{ctx}</div>;
};

function App() {
	return (
		<Provider1>
			<MyComponent1 />
			<MyComponent2 />
		</Provider1>
	);
}

export default App;
