/* --------------------------------------------------------------------------
 * APUNTES:
 * 		   En este archivo se demuestra por no se debe abusar del uso del
 * 		   Context. Debido a que el mismo no puede utilizar las funciones
 * 		   de optimización, tales como: memo, useCallback, etc. 
-------------------------------------------------------------------------- */

import { createContext, useContext, useState, memo, useCallback } from 'react';

// Contexto
const Context = createContext();

// Proveedor
const CounterProvider = ({ children }) => {
	const [counter, setCounter] = useState(0);

	const increase = useCallback(() => setCounter((x) => x + 1), []);
	const decrease = useCallback(() => setCounter((x) => x - 1), []);

	return (
		<Context.Provider value={{ counter, increase, decrease }}>
			{children}
		</Context.Provider>
	);
};

// Componente
const Increase = memo(() => {
	console.log('Increase');
	const { increase } = useContext(Context);
	return <button onClick={increase}>Incrementar</button>;
});

// Componente
const Decrease = memo(() => {
	console.log('Decrease');
	const { decrease } = useContext(Context);
	return <button onClick={decrease}>Decrementar</button>;
});

// Componente
const Label = () => {
	console.log('Label');
	const { counter } = useContext(Context);
	return <h1>{counter}</h1>;
};

const App = () => {
	return (
		<CounterProvider>
			<Increase />
			<Decrease />
			<Label />
		</CounterProvider>
	);
};

export default App;
