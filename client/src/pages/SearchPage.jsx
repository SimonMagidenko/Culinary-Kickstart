// Import the `useParams()` hook
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import SideBarNav from "../components/SideNavBar/SideNavBar";

import {
  Button,
  Checkbox,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  HStack,
  Image,
} from "@chakra-ui/react";

const SearchPage = () => {
  const [searchParam, setSearchParam] = useState("");

  const onClickHandler = (event) => {
    setSearchParam(event.target.textContent);
  };
  console.log(searchParam);

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="sideBarNavContainer">
        <SideBarNav />
      </div>
      <form action="" id="searchForm" onSubmit={submitHandler}>
        <div id="input">
          <label htmlFor="searchBar">Search</label>
          <Input
            id="searchBar"
            placeholder="Search for Recipes"
            name="search"
            type="text"
          ></Input>
          <button id="searchBtn">Search</button>
        </div>
        <div className="dietRestrictions" id="HStack">
          <h2>Diet Restrictions:</h2>
          <HStack className="dietRestrictionsContainer">
            <div className="dietRestriction" onClick={onClickHandler}>
              Dairy-Free
            </div>
            <div className="dietRestriction" onClick={onClickHandler}>
              Gluten-Free
            </div>
            <div className="dietRestriction" onClick={onClickHandler}>
              Vegetarian
            </div>
            <div className="dietRestriction" onClick={onClickHandler}>
              Vegan
            </div>
            <div className="dietRestriction" onClick={onClickHandler}>
              Soy-Free
            </div>
            <div className="dietRestriction" onClick={onClickHandler}>
              Tree Nut-Free
            </div>
            <div className="dietRestriction" onClick={onClickHandler}>
              Keto-Friendly
            </div>
          </HStack>
        </div>
      </form>
      <div>
        <h2>Search Results:</h2>
        {/* <RecipeCard></RecipeCard> */}
      </div>
    </>
  );
};

export default SearchPage;
