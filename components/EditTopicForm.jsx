"use client";


import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Input,
  Button,
  Textarea,
  Heading
} from "@chakra-ui/react";
import Navbar from "./NavBar";
import { useToast } from "@chakra-ui/react";

export default function EditTopicForm({ id, title, description }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const url = process.env.NEXT_PUBLIC_API_URL
  const router = useRouter();
  const toast = useToast()
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("URL",  url)
      const res = await fetch(`${url}/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });
      if(res.ok){
        toast({
          title: "Success",
          description: "Topic updated successfully!",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      }
      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
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
        width={'80vw'}
      >
      <Heading color={'#EFB7BA'} marginBottom={'20px'} marginTop={'5px'}>Update Topic</Heading>
      <Input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        border="1px"
        borderColor="slate.500"
        placeholder="Topic Title"
        marginBottom={'10px'}
      />

      <Textarea
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        border="1px"
        borderColor="slate.500"
        placeholder="Topic Description"
        marginBottom={'10px'}
      />

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
        Update Topic
      </Button>
      </Box>
    </Box>
    </>
  );
}
