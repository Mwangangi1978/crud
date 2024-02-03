"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Box,
  Input,
  Button,
  Heading,
  FormControl,
  FormLabel
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import Navbar from "@/components/NavBar";

export default function AddTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const toast = useToast(); 
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and description are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        toast({
          title: "Success",
          description: "Topic created successfully!",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create a topic",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      console.log(error);
    }
  };

  return (
    <>
    <Navbar/>
    <Box
                
      backgroundSize="cover"
      backgroundPosition="center"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        as="form"
        onSubmit={handleSubmit}
        p={6}
        borderRadius="md"
        boxShadow="md"
        textAlign="center"
        width={'50vw'}
      >
        <Heading color={'#EFB7BA'} marginBottom={'20px'} marginTop={'5px'}>Add a New Topic</Heading>
        
        <FormControl id="title" marginBottom={"10px"}>
          <FormLabel textAlign={"center"}>Topic</FormLabel>
          <Input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          border="1px"
          borderColor="slate.500"
          px={8}
          py={2}
          placeholder="Topic Title"

          name="title"
          type="text"
          />
        </FormControl>
        <FormControl id="password" mt={4} marginBottom={"10px"}>
            <FormLabel textAlign={"center"}>Description</FormLabel>
            <Input
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                border="1px"
                borderColor="slate.500"
                px={8}
                py={2}
                placeholder="Topic Description"
            />
        </FormControl>

        <Button
          type="submit"
          bg="#194F92"
          color="white"
          fontWeight="bold"
          py={3}
          px={6}
          alignSelf="flex-start"
          _hover={{ bg: "#CBD5F0" }}
        >
          Add Topic
        </Button>
      </Box>
    </Box>
    </>
  );
}
