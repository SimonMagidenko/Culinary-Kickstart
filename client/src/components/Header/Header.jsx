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
                  <Avatar border="solid 1px white" size={"sm"} src={""} />
                </MenuButton>
              </Link>
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
