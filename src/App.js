import React, { Fragment, useState, useEffect } from 'react';

import { Grid, Container, Box, Heading } from '@chakra-ui/react';

import Header from './components/Header';
import Form from './components/Form';
import ListForm from './components/ListForm';

function App() {
	// Users on local storage
	let usersStarted = JSON.parse(localStorage.getItem('users'));
	if (!usersStarted) {
		usersStarted = [];
	}

	// Array of dating
	const [users, setUsers] = useState(usersStarted);

	// Use effect for kind somethings happens on dating
	useEffect(() => {
		let usersStarted = JSON.parse(localStorage.getItem('users'));
		if (usersStarted) {
			localStorage.setItem('users', JSON.stringify(users));
		} else {
			localStorage.setItem('users', JSON.stringify([]));
		}
	}, [users]);

	// Function take current user and add new
	const createUser = (user) => {
		setUsers([...users, user]);
	};

	// {Title} conditional message
	const title =
		users.length === 0 ? 'No registered users' : ' User information';

	return (
		<Fragment>
			<Header />
			<Container maxW="container.xl">
				<Grid mt={8} templateColumns="repeat(2, 1fr)" gap={32}>
					<Box>
						<Heading mb={8}>Register</Heading>
						<Form createUser={createUser} />
					</Box>
					<Box>
						<Heading mb={8}>{title}</Heading>

						{users.map((user) => (
							<ListForm key={user.id} user={user} />
						))}
					</Box>
				</Grid>
			</Container>
		</Fragment>
	);
}

export default App;
