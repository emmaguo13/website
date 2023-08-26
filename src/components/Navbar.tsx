import { Box, Flex, Heading, Link, Text, Button, useColorMode, Stack, Image, Center, SimpleGrid, VStack } from "@chakra-ui/react";

import NextLink from "next/link";
import { FaMoon, FaSun } from "react-icons/fa";

interface NavbarProps {
  onNavClick: (navItem: string) => void;
}

const Navbar = ({onNavClick}: NavbarProps) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex bg={colorMode === "dark" ? "black.500" : "white.500"} px={{ base: 4, md: 12 }} py={6} justifyContent="space-between" alignItems="center">
      <Flex align="center">
        <Box flex="1">
          <Image src="https://i.imgur.com/Bd6NzVy.png" alt="Email" height="1.5em" objectFit="cover" />
        </Box>
        <Link as={NextLink} href="/" color={colorMode === "dark" ? "white" : "black"} mx={2} fontWeight="bold">
          ZK EMAIL
        </Link>
      </Flex>
      <Box>
        <Button onClick={() => { onNavClick('blog'); window.location.href='/blog'; }} color={colorMode === "dark" ? "white" : "black"} mx={4}>
          Blog
        </Button>
        <Link as={NextLink} href="/docs" color={colorMode === "dark" ? "white" : "black"} mx={4}>
          Docs
        </Link>
        <Link as={NextLink} href="/demo " color={colorMode === "dark" ? "white" : "black"} mx={4}>
          Demo
        </Link>
        <Link as={NextLink} href="/contact" color={colorMode === "dark" ? "white" : "black"} mx={4}>
          Contact
        </Link>
      </Box>
      <Button onClick={toggleColorMode} mx={{ base: 2, md: 4 }} p={0}>
        {colorMode === "dark" ? <FaMoon size="1.2em" /> : <FaSun size="1.2em" />}
      </Button>
    </Flex>
  );
};

export default Navbar;
