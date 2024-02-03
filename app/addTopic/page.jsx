"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Box,
  Input,
  Button,
  Heading,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

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
        <Heading color={'teal'} marginBottom={'20px'} marginTop={'5px'}>Add a New Topic</Heading>
        <Input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          border="1px"
          borderColor="slate.500"
          px={8}
          py={2}
          placeholder="Topic Title"
          marginBottom={'10px'}
        />

        <Input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          border="1px"
          borderColor="slate.500"
          px={8}
          py={2}
          placeholder="Topic Description"
          marginBottom={'10px'}
        />

        <Button
          type="submit"
          bg="green.600"
          color="white"
          fontWeight="bold"
          py={3}
          px={6}
          alignSelf="flex-start"
          _hover={{ bg: "green.700" }}
        >
          Add Topic
        </Button>
      </Box>
    </Box>
  );
}
