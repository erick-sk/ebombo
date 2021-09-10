import React, { Fragment } from 'react';
import faker from 'faker';
import moment from 'moment';

import { Box, Text, Flex, Avatar, Spacer, Center } from '@chakra-ui/react';

const ListForm = ({ user }) => {
	// Format Birthday
	const date = user.birthday;
	const formatDate = moment(date).format('MMMM d, YYYY');

	// Generate avatar image random
	const avatar = faker.image.avatar();

	return (
		<Fragment>
			<Flex bg="green.200" borderRadius="lg" mb={4} p={4}>
				<Box>
					<Text>
						<strong>Name:</strong> {user.name}
					</Text>
					<Text>
						<strong>Tel:</strong> {user.tel}
					</Text>
					<Text>
						<strong>Birthday:</strong> {formatDate}
					</Text>
				</Box>
				<Spacer />
				<Center>
					<Avatar
						size="lg"
						bg="#186D59"
						name={user.name}
						src={avatar}
					></Avatar>
				</Center>
			</Flex>
		</Fragment>
	);
};

export default ListForm;
