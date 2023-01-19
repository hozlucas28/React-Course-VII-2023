/* --------------------------------------------------------------------------
 * APUNTES:
 * 		   En este archivo se demuestra un uso avanzado del Context, donde
 * 		   este almacena un valor booleano y una función.
-------------------------------------------------------------------------- */

import { createContext, useContext, useState } from 'react';

// Contexto
const Context = createContext({ value: false, toggle: () => {} });

// Proveedor
const Provider = ({ children }) => {
	const [value, setValue] = useState(false);

	const valueAttr = {
		value,
		toggle: () => setValue(!value)
	};

	return <Context.Provider value={valueAttr}>{children}</Context.Provider>;
};

// Componente
const MyComponent = () => {
	const { value, toggle } = useContext(Context);

	return (
		<div>
			<label>{value.toString()}</label>
			<button onClick={toggle}>Toggle</button>
		</div>
	);
};

const App = () => {
	return (
		<Provider>
			<MyComponent />
		</Provider>
	);
};

export default App;
