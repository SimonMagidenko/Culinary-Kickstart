
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
import RecipeCard from "../components/RecipeCard/RecipeCard";
import { BiSolidObjectsHorizontalCenter } from "react-icons/bi";

const SearchPage = () => {
  const { loading, data } = useQuery(QUERY_GRAB_API)
  const apiData = data?.grabAPI || {}

  const [dietType, setSearchParam] = useState("");
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  console.log(recipes)

  const onClickHandler = (dietRestriction) => {
    if (dietType === dietRestriction) {
      setSearchParam(null);
    } else {
      setSearchParam(dietRestriction);
    }
  };

  const isSelected = (dietRestriction) => {
    return dietType === dietRestriction;
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setQuery(value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    if (!query) {
      return false
    }

    try {
      const response = await searchFoodAPI(query, apiData.api_id, apiData.api_key);

      const searchData = await response.json()
      setRecipes(searchData.hits);
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
            name="query"
            value={query}
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
        <RecipeCard recipes={recipes}></RecipeCard>
      </div>
    </>
  );
};

export default SearchPage;
