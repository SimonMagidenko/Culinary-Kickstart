import React from "react";

import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as BiIcons from "react-icons/bi";
export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Search",
    path: "/search",
    icon: <BsIcons.BsSearch />,
    cName: "nav-text",
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <BiIcons.BiUserCircle />,
    cName: "nav-text",
  },
];
