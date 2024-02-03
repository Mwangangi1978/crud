"use client"

import { useState } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Input,
  Button,
} from "@chakra-ui/react";
import Navbar from "./NavBar";

export default function EditTopicForm({ id, title, description }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

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
    <Box as="form" onSubmit={handleSubmit} display="flex" flexDirection="column" gap={3}>
      <Input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        border="1px"
        borderColor="slate.500"
        px={8}
        py={2}
        placeholder="Topic Title"
      />

      <Input
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        border="1px"
        borderColor="slate.500"
        px={8}
        py={2}
        placeholder="Topic Description"
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
        Update Topic
      </Button>
    </Box>
    </>
  );
}
