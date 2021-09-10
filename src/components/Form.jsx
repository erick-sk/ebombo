import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { HiPhone, HiUser } from 'react-icons/hi';
import {
	FormControl,
	FormLabel,
	Input,
	Button,
	Alert,
	AlertIcon,
	AlertTitle,
	AlertDescription,
	InputGroup,
	InputLeftElement,
} from '@chakra-ui/react';

const Form = ({ createUser }) => {
	// Create state of User
	const [user, setUser] = useState({
		name: '',
		tel: '',
		birthday: '',
	});

	// Function eject every time user writing on input
	const handleChange = (event) => {
		setUser({
			...user,
			[event.target.name]: event.target.value,
		});
	};

	// State for error
	const [error, setError] = useState(false);

	// Extracting values from user
	const { name, tel, birthday } = user;

	// When User press "Add"
	const submitUser = (event) => {
		event.preventDefault();

		// Validation
		if (name.trim() === '' || tel.trim() === '' || birthday.trim() === '') {
			setError(true);
			return;
		}

		// Delete error message
		setError(false);

		// Set ID
		user.id = uuidv4();

		// Create user
		createUser(user);

		// Reset Form
		setUser({
			name: '',
			tel: '',
			birthday: '',
		});
	};

	return (
		<form onSubmit={submitUser}>
			{error ? (
				<Alert mb={4} status="error">
					<AlertIcon />
					<AlertTitle>All fields are required.</AlertTitle>
					<AlertDescription>Try one more time!</AlertDescription>
				</Alert>
			) : null}

			<FormControl>
				<FormLabel htmlFor="name">Name:</FormLabel>
				<InputGroup>
					<InputLeftElement
						pointerEvents="none"
						children={<HiUser color="green" />}
					/>
					<Input
						focusBorderColor="green.400"
						id="name"
						name="name"
						placeholder="Your name"
						onChange={handleChange}
						value={name}
					/>
				</InputGroup>
			</FormControl>
			<FormControl>
				<FormLabel pt={4} htmlFor="tel">
					Tel:
				</FormLabel>
				<InputGroup>
					<InputLeftElement
						pointerEvents="none"
						children={<HiPhone color="green" />}
					/>

					<Input
						focusBorderColor="green.400"
						type="tel"
						maxLength="9"
						id="tel"
						name="tel"
						placeholder="Your number phone"
						onChange={handleChange}
						value={tel}
					/>
				</InputGroup>
			</FormControl>

			<FormControl>
				<FormLabel htmlFor="birthday" pt={4}>
					Birthday:
				</FormLabel>
				<Input
					focusBorderColor="green.400"
					type="date"
					id="birthday"
					name="birthday"
					onChange={handleChange}
					value={birthday}
				/>
			</FormControl>

			<Button mt={6} colorScheme="green" type="submit">
				Add
			</Button>
		</form>
	);
};

export default Form;
