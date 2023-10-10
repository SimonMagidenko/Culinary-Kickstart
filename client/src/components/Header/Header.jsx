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
              <Button
                className="button"
                variant={"solid"}
                colorScheme={"gray"}
                size={"sm"}
                mr={4}
              >
                Login
              </Button>
            </Link>
            <Link to={"/signup"}>
              <Button
                className="button"
                variant={"solid"}
                colorScheme={"gray"}
                size={"sm"}
                mr={4}
              >
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
                    border="solid 1px white"
                    size={"sm"}
                    src={
                      "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2517&q=80"
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
