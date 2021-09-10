import React from 'react';
import { Container, Box, Image, Flex } from '@chakra-ui/react';

const Header = () => {
	return (
		<Box bg="#186D59" pt={4} pb={4} color="white">
			<Container maxW="container.xl">
				<Flex>
					<a href="/">
						<Image
							src="https://storage.googleapis.com/bombo-sport.appspot.com/resources/ebombo-fulllogo.svg"
							alt="Logo"
						/>
					</a>
				</Flex>
			</Container>
		</Box>
	);
};

export default Header;
