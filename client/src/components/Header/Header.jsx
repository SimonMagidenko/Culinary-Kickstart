import React from "react";
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  useColorModeValue,
} from "@chakra-ui/react";
import "./Header.css";
import { Link } from "react-router-dom";
import * as LuIcon from "react-icons/lu";

export default function HeaderBar() {
  return (
    <>
      <Box bg={useColorModeValue("#333333")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <div className="logoTitle">
            <Link to={"/"}>
              <LuIcon.LuChefHat size={"35px"} />
            </Link>
            <Link to={"/"}>
              <h1 id="title">Welcome to Culinary Kickstart</h1>
            </Link>
          </div>
          <Flex alignItems={"center"}>
            <Link to={"/login"}>
              <Button variant={"solid"} colorScheme={"teal"} size={"sm"} mr={4}>
                Login
              </Button>
            </Link>
            <Link to={"/signup"}>
              <Button variant={"solid"} colorScheme={"teal"} size={"sm"} mr={4}>
                Sign Up
              </Button>
            </Link>
            <Menu>
              <Link to={"/profile"}>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={
                      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                    }
                  />
                </MenuButton>
              </Link>
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
