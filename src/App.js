/* --------------------------------------------------------------------------
 * APUNTES:
 * 		   En este archivo se demuestra como aplicar multiples contextos a
 * 		   un componente funcional.
-------------------------------------------------------------------------- */

import { createContext, useContext } from 'react';

const Context1 = createContext('Mi contexto 1');
const Context2 = createContext('Mi contexto 2');

const Provider = ({ children }) => {
	return (
		<Context1.Provider value="Valor 1">
			<Context2.Provider value="Valor 2">{children}</Context2.Provider>
		</Context1.Provider>
	);
};

const MyComponent = () => {
	const value1 = useContext(Context1);
	const value2 = useContext(Context2);
	return <div>{`${value1} ${value2}`}</div>;
};

const App = () => {
	return (
		<Provider>
			<MyComponent />
		</Provider>
	);
};

export default App;
