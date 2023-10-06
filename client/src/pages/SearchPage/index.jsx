import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { QUERY_GRAB_API } from "../../utils/queries";
import { searchFoodAPI } from "../../utils/API";
import SideBarNav from "../../components/SideNavBar/SideNavBar";
import HeaderBar from "../../components/Header/Header";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
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
import "./SearchPage.css";


const SearchPage = () => {
  const { loading, data } = useQuery(QUERY_GRAB_API);
  const apiData = data?.grabAPI || {};

  const [dietType, setSearchParam] = useState("");
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  console.log(recipes);

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
      return false;
    }

    try {
      const response = await searchFoodAPI(
        query,
        apiData.api_id,
        apiData.api_key,
        dietType
      );
      console.log(response);
      const searchData = await response.json();

      setRecipes(searchData.hits);
    } catch (error) { }
  };

  return (
    <>
      <div className="main">
        <div className="headerBar">
          <HeaderBar />
        </div>
        <div className="mainFlexContainer">
          <div className="sideBarNav">
            <SideBarNav />
          </div>
          <div className="searchContainer">
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
                <button type="submit" id="searchBtn">
                  Search
                </button>
              </div>
              <div className="dietRestrictions" id="HStack">
                <h2>Diet Restrictions:</h2>
                <HStack className="dietRestrictionsContainer">
                  <div
                    className={`dietRestriction ${isSelected("balanced") ? "selected" : ""
                      }`}
                    onClick={() => onClickHandler("balanced")}
                  >
                    Balanced
                  </div>
                  <div
                    className={`dietRestriction ${isSelected("high-fiber") ? "selected" : ""
                      }`}
                    onClick={() => onClickHandler("high-fiber")}
                  >
                    High Fiber
                  </div>
                  <div
                    className={`dietRestriction ${isSelected("high-protein") ? "selected" : ""
                      }`}
                    onClick={() => onClickHandler("high-protein")}
                  >
                    High Protein
                  </div>
                  <div
                    className={`dietRestriction ${isSelected("low-carb") ? "selected" : ""
                      }`}
                    onClick={() => onClickHandler("low-carb")}
                  >
                    Low Carb
                  </div>
                  <div
                    className={`dietRestriction ${isSelected("low-fat") ? "selected" : ""
                      }`}
                    onClick={() => onClickHandler("low-fat")}
                  >
                    Low Fat
                  </div>
                  <div
                    className={`dietRestriction ${isSelected("low-sodium") ? "selected" : ""
                      }`}
                    onClick={() => onClickHandler("low-sodium")}
                  >
                    Low Sodium
                  </div>
                </HStack>
              </div>
            </form>
            <div>
              <h2>Search Results:</h2>
              <RecipeCard recipes={recipes}></RecipeCard>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
