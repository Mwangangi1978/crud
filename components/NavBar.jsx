"use client"

import { Link as ChakraLink, Box, Heading } from "@chakra-ui/react";
import NextLink from "next/link";

const Navbar = () => {
  return (
    <Box
      as="nav"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      bg="#CBD5F0"
      px={8}
      py={3}
      height={'50px'}
    >
      <NextLink href="/">
        <ChakraLink
          color="#194F92"
          fontWeight="semi-bold"
          fontSize={'2xl'}
          _hover={{ textDecor: "none", color: "white" }}
          transition="color 0.3s"  
        >
          Mwangangi MONGO+DB.
        </ChakraLink>
      </NextLink>
      <NextLink href="/addTopic">
        <ChakraLink
          color="white"
          p={2}
          fontWeight="normal"
          fontSize={'2xl'}
          _hover={{ textDecor: "none", color: "#194F92" }}
          transition="background-color 0.3s"
        >
          Add Topic
        </ChakraLink>
      </NextLink>
    </Box>
  );
};

export default Navbar;
