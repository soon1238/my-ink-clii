#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
import meow from 'meow';
import App from './app.js';

const cli = meow(
	`
		Usage
		  $ my-ink-cli

		Options
			--name  Your name

		Examples
		  $ my-ink-cli --name=Jane
		  Hello, Jane
	`,
	{
		importMeta: import.meta,
	},
);

render(<App name={cli.flags.name} />);

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
