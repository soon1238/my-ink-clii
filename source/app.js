// import React from 'react';
// import {Text} from 'ink';
import React, {useState, useEffect} from 'react';
import {render, Text} from 'ink';
const Counter = () => {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCounter(previousCounter => previousCounter + 1);
		}, 100);

		return () => {
			clearInterval(timer);
		};
	}, []);
	return <Text color="green">{counter} tests passed</Text>;
};
export default function App({name = 'Stranger'}) {
	return (
		<>
			{/* Hello, <Text color="green">{name}</Text>! <Counter /> */}
			<Text color="green">Green</Text>
			<Text color="#005cc5">Blue</Text>
			<Text color="rgb(232, 131, 136)">Red</Text>
			<Text backgroundColor="green" color="white">
				Green
			</Text>
			<Text backgroundColor="#005cc5" color="white">
				Blue
			</Text>
			<Text backgroundColor="rgb(232, 131, 136)" color="white">
				Red
			</Text>
			<Counter />
		</>
	);
}
