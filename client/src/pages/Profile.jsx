import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import {
  Heading,
  Avatar,
  Box,
  Center,
  GridItem,
  Grid,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react'

// import { QUERY_USER, QUERY_ME } from "../utils/queries";

import Auth from "../utils/auth";

const Profile = () => {
  // const { loading, data } = useQuery(QUERY_ME);
  // const thoughts = data?.username || [];

  return (
    <>
      <Grid h='100vh' w='100vw' templateRows='repeat(1, 1fr)' templateColumns='repeat(3, 1fr)' gap={2}>
        {/* First grid item */}
        <GridItem rowSpan={2} colSpan={1} bg='green.800' >
          <h1 className="text-center pt-5">My Account</h1>

          <Center py={6}>
            <Box maxW={'450'}w={'90vw'} maxH={'1000px'} h={'full'} bg={useColorModeValue('white', 'gray.800')} boxShadow={'2xl'} rounded={'md'} overflow={'hidden'}>
              <Image h={'450px'} w={'full'}
                src={
                  'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                }
                objectFit="cover"
                alt="#"
              />
              <Flex justify={'center'} mt={-12}>
                <Avatar
                  size={'xl'}
                  src={
                    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                  }
                  css={{
                    border: '2px solid white',
                  }}
                />
              </Flex>

              <Box p={6}>
                <Stack spacing={0} align={'center'} mb={5}>
                  <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                    John Doe
                  </Heading>
                  <Text color={'gray.500'}>Frontend Developer</Text>
                </Stack>

                <Stack direction={'row'} justify={'center'} spacing={6}>
                  <Stack spacing={0} align={'center'}>
                    <Text fontWeight={600}>23k</Text>
                    <Text fontSize={'sm'} color={'gray.500'}>
                      Followers
                    </Text>
                  </Stack>
                  <Stack spacing={0} align={'center'}>
                    <Text fontWeight={600}>23k</Text>
                    <Text fontSize={'sm'} color={'gray.500'}>
                      Followers
                    </Text>
                  </Stack>
                </Stack>

                <Button
                  w={'full'}
                  mt={8}
                  bg={useColorModeValue('#151f21', 'gray.900')}
                  color={'white'}
                  rounded={'md'}
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                  }}>
                  Follow
                </Button>
              </Box>
            </Box>
          </Center>

        </GridItem>
        <GridItem rowSpan={2} colSpan={2} bg='papayawhip'>

          <h1 className="text-center pt-5">My Saved Recipes</h1>

          <div className="card-container">
          </div>

        </GridItem>
      </Grid>
    </>
  )
};

export default Profile;
