"use client"

import { Button, IconButton } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

import { useRouter } from "next/navigation";

export default function RemoveBtn({ id }) {
  const router = useRouter();
  const url = process.env.API_URL
  const removeTopic = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      console.log("URL",  url)
      const res = await fetch(`${url}/api/topics?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        toast({
          title: "Success",
          description: "Topic deleted successfully!",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        router.refresh();
      }
    }
  };

  return (
    <IconButton onClick={removeTopic} colorScheme={'red'} aria-label='Delete Item'>
      <DeleteIcon size={24} />
    </IconButton>
  );
}