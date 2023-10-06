// Import the `useParams()` hook
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { QUERY_GRAB_API } from "../utils/queries";
import { searchFoodAPI } from '../utils/API';
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
  const [searchBarQuery, setSearchParam] = useState("");
  const {loading, data} = useQuery(QUERY_GRAB_API)
  const apiData = data?.grabAPI || {}
  console.log(apiData);

  const onClickHandler = () => {

  }

  const onChangeHandler = (event) => {
    const {name, value} = event.target;
    setSearchParam(value);
  };
  console.log(searchBarQuery);

  const submitHandler = async (event) => {
    event.preventDefault();

    if (!searchBarQuery) {
      return false
    }

    try {
      console.log(searchBarQuery);
      const response = await searchFoodAPI(searchBarQuery, apiData.api_id, apiData.api_key);
      console.log(response);
      const searchData = await response.json()
      console.log(searchData);
    } catch (error) {
      
    }
  };

  return (
    <>
      <div className="sideBarNavContainer">
        <SideBarNav />
      </div>
      <form id="searchForm" onSubmit={submitHandler}>
        <div id="input">
          <label htmlFor="searchBar">Search</label>
          <Input

            id="searchBar"
            placeholder="Search for Recipes"
            name="searchBarQuery"
            value={searchBarQuery}
            onChange={onChangeHandler}
            type="text"
          ></Input>
          <button type="submit" id="searchBtn">Search</button>
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
