import React from 'react';
import chalk from 'chalk';
import test from 'ava';
import {render} from 'ink-testing-library';
import App from './source/app.js';

test('greet unknown user', t => {
	const {lastFrame} = render(<App />);

	t.is(lastFrame(), `Hello, ${chalk.green('Stranger')}`);
});

test('greet user with a name', t => {
	const {lastFrame} = render(<App name="Jane" />);

	t.is(lastFrame(), `Hello, ${chalk.green('Jane')}`);
});

// import React, {useState, useEffect} from 'react';
// import {render, Text} from 'ink';

// const Counter = () => {
// 	const [counter, setCounter] = useState(0);

// 	useEffect(() => {
// 		const timer = setInterval(() => {
// 			setCounter(previousCounter => previousCounter + 1);
// 		}, 100);

// 		return () => {
// 			clearInterval(timer);
// 		};
// 	}, []);

// 	return <Text color="green">{counter} tests passed</Text>;
// };

// render(<Counter />);
