import React from 'react';
import { Link } from 'gatsby';
import { Box, VStack, Button } from '@chakra-ui/react';
import '../styles/Layout.css';

const NavigationButton = () => {
    return (
        <Box display="flex" flexDirection="column" alignItems="flex-start" bg="whitesmoke">
            <Button colorScheme="orange" variant="ghost" >
                <Link to="/Home" className="navigation-button">
                    Home
                </Link>
            </Button>
            <Button colorScheme="orange" variant="ghost">
                <Link to="/About" className="navigation-button">
                    About
                </Link>
            </Button>
            <Button colorScheme="orange" variant="ghost">
                <Link to="/Products" className="navigation-button">
                    Products
                </Link>
            </Button>
            <Button colorScheme="orange" variant="ghost">
                <Link to="/Contact" className="navigation-button">
                    Contact
                </Link>
            </Button>
        </Box>
    );
};

export default NavigationButton;
