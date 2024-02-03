import Navbar from "./../components/NavBar";
import TopicsList from './../components/TopicList'
import { Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Heading textAlign={'center'} marginBottom={'10px'} marginTop={'10px'} color={'#EFB7BA'}>Fun Facts about Kenya</Heading>
      <TopicsList/>
    </>
  );
}
