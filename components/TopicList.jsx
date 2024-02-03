"use client"

import { Box, Heading, Text, Flex, Link as ChakraLink } from "@chakra-ui/react";
import RemoveBtn from "./RemoveBtn";
import { EditIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

const TopicsList = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const fetchTopics = async () => {
      const { topics } = await getTopics();
      setTopics(topics);
    };

    fetchTopics();
  }, []);

  return (
    <>
      {topics.map((t) => (
        <Box
          key={t._id}
          p={4}
          borderWidth="1px"
          borderColor="slate.300"
          my={3}
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
          borderRadius="md"
          boxShadow="md"
        >
          <Box>
            <Heading fontSize="2xl" fontWeight="bold">
              {t.title}
            </Heading>
            <Text>{t.description}</Text>
          </Box>

          <Flex gap={2}>
            <RemoveBtn id={t._id} />
            <ChakraLink href={`/editTopic/${t._id}`}>
              <EditIcon boxSize={6} />
            </ChakraLink>
          </Flex>
        </Box>
      ))}
    </>
  );
};

export default TopicsList;
