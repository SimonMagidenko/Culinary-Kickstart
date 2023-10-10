import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";
import SideBarNav from "../../components/SideNavBar/SideNavBar";
import Auth from "../../utils/auth";
import "./Profile.css";
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
} from "@chakra-ui/react";

const Profile = () => {
  const { loading, data } = useQuery(QUERY_ME);

  const userData = data?.me || {};

  const handleLogout = () => {
    Auth.logout();
  };

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  if (!userData.username) {
    return (
      <div className=" loginPrompt">
        You need to be logged in to see this. Please Login or Sign Up to view
        the profile page.
      </div>
    );
  }
  return (
    <>
      <div className="mainPageContainer">
        <SideBarNav />
        <div className="mainPageContentContainer">
          <Grid
            h="100vh"
            w="100vw"
            templateRows="repeat(1, 1fr)"
            templateColumns="repeat(3, 1fr)"
            gap={2}
          >
            {/* First grid item */}
            <GridItem rowSpan={2} colSpan={1} bg="#FDF5E6">
              <h1 className="text-center pt-5">My Account</h1>

              <Center py={6}>
                <Box
                  maxW={"500px"}
                  w={"90vw"}
                  maxH={"900px"}
                  h={"full"}
                  bg={"#FDF5E6"}
                  boxShadow={"2xl"}
                  rounded={"md"}
                  overflow={"hidden"}
                >
                  <Image
                    h={"375px"}
                    w={"full"}
                    src={
                      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2653&q=80&auto=format&fit=crop&w=634&q=80"
                    }
                    objectFit="cover"
                    alt="#"
                  />
                  <Flex justify={"center"} mt={-12}>
                    <Avatar
                      size={"xl"}
                      src={
                        "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2517&q=80"
                      }
                      css={{
                        border: "2px solid white",
                      }}
                    />
                  </Flex>

                  <Box p={6}>
                    <Stack spacing={0} align={"center"} mb={5}>
                      <Heading
                        fontSize={"2xl"}
                        fontWeight={500}
                        fontFamily={"body"}
                      >
                        {userData.username}
                      </Heading>
                      <Text color={"gray.500"}>{userData.email}</Text>
                    </Stack>

                    <Stack direction={"row"} justify={"center"} spacing={6}>
                      <Stack spacing={0} align={"center"}>
                        <Text fontWeight={600}>6</Text>
                        <Text fontSize={"sm"} color={"gray.500"}>
                          Saved Recipes
                        </Text>
                      </Stack>
                    </Stack>

                    <Button
                      w={"full"}
                      mt={8}
                      bg={useColorModeValue("#151f21", "gray.900")}
                      color={"white"}
                      rounded={"md"}
                      _hover={{
                        transform: "translateY(-2px)",
                        boxShadow: "lg",
                      }}
                      onClick={handleLogout}
                    >
                      Sign Out
                    </Button>
                  </Box>
                </Box>
              </Center>
            </GridItem>
            <GridItem rowSpan={2} colSpan={2} bg="#FDF5E6">
              <h1 className="text-center pt-5">My Saved Recipes</h1>
              <h2 className="text-center pt-5">Coming Soon </h2>
            </GridItem>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Profile;
