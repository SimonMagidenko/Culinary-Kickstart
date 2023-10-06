
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { QUERY_SEARCH_FOOD } from "../utils/queries";
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
  const [searchParam, setSearchParam] = useState("");
  const { loading, data } = useQuery(QUERY_SEARCH_FOOD)
  const apiData = data?.searchFood || {}
  console.log(apiData);

  const onClickHandler = (dietRestriction) => {
    if (searchParam === dietRestriction) {
      setSearchParam(null);
    } else {
      setSearchParam(dietRestriction);
    }
  };
  const isSelected = (dietRestriction) => {
    return searchParam === dietRestriction;
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setSearchParam(value);

  };

  const submitHandler = async (event) => {
    event.preventDefault();

    if (!searchParam) {
      return false
    }

    try {
      console.log(searchParam);
      const response = await searchFoodAPI(searchParam, apiData.api_id, apiData.api_key);
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
          <Input

            id="searchBar"
            placeholder="Search for Recipes"
            name="searchParam"
            value={searchParam}
            onChange={onChangeHandler}
            type="text"
          ></Input>
          <button type="submit" id="searchBtn">Search</button>
        </div>
        <div className="dietRestrictions" id="HStack">
          <h2>Diet Restrictions:</h2>
          <HStack className="dietRestrictionsContainer">
            <div
              className={`dietRestriction ${isSelected("Dairy-Free") ? "selected" : ""
                }`}
              onClick={() => onClickHandler("Dairy-Free")}
            >
              Dairy-Free
            </div>
            <div
              className={`dietRestriction ${isSelected("Gluten-Free") ? "selected" : ""
                }`}
              onClick={() => onClickHandler("Gluten-Free")}
            >
              Gluten-Free
            </div>
            <div
              className={`dietRestriction ${isSelected("Vegetarian") ? "selected" : ""
                }`}
              onClick={() => onClickHandler("Vegetarian")}
            >
              Vegetarian
            </div>
            <div
              className={`dietRestriction ${isSelected("Vegan") ? "selected" : ""
                }`}
              onClick={() => onClickHandler("Vegan")}
            >
              Vegan
            </div>
            <div
              className={`dietRestriction ${isSelected("Tree Nut-Free") ? "selected" : ""
                }`}
              onClick={() => onClickHandler("Tree Nut-Free")}
            >
              Tree Nut-Free
            </div>
            <div
              className={`dietRestriction ${isSelected("Soy-Free") ? "selected" : ""
                }`}
              onClick={() => onClickHandler("Soy-Free")}
            >
              Soy-Free
            </div>
            <div
              className={`dietRestriction ${isSelected("Keto-Friendly") ? "selected" : ""
                }`}
              onClick={() => onClickHandler("Keto-Friendly")}
            >
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
