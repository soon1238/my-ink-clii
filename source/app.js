// import React from 'react';
// import {Text} from 'ink';
import React, {useState, useEffect} from 'react';
import {render, Box, Text} from 'ink';
import SelectInput from 'ink-select-input';
import {exec} from 'child_process';

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

const DesktopLauncher = () => {
	const [status, setStatus] = useState('Select an app to launch...');

	const handleSelect = item => {
		setStatus(`Attempting to open ${item.label}...`);

		// Fire the command to the operating system
		exec(item.value, error => {
			if (error) {
				setStatus(`❌ Error opening ${item.label}: ${error.message}`);
			} else {
				setStatus(`✅ Launched ${item.label}!`);
			}
		});
	};

	// The 'value' contains the actual OS-level command
	const apps = [
		{label: '🌐 Open Browser to Google', value: 'start https://google.com'},
		{label: '📝 Launch Microsoft Word', value: 'start winword'},
		{label: '📊 Launch Excel', value: 'start excel'},
		{label: '📁 Open Current Folder in Explorer', value: 'start .'},
	];

	return (
		<Box
			flexDirection="column"
			margin={1}
			borderStyle="round"
			borderColor="green"
		>
			<Box marginBottom={1}>
				<Text color="green" bold>
					🖥️ Desktop App Launcher
				</Text>
			</Box>

			<SelectInput items={apps} onSelect={handleSelect} />

			<Box marginTop={1} paddingX={1}>
				<Text color="gray">{status}</Text>
			</Box>
		</Box>
	);
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
			<Text color="red" bold italic underline strikethrough inverse>
				Dimmed Red
			</Text>
			<Box margin={2} borderStyle="single" borderColor="cyan">
				<Text>This is a box with margin</Text>
			</Box>
			<Box paddingTop={2} borderColor="cyan" borderStyle="single">
				<Text>Top</Text>
			</Box>

			<Counter />
			<DesktopLauncher />
		</>
	);
}
