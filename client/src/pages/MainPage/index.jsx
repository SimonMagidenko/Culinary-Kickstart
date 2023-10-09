import SideBarNav from "../../components/SideNavBar/SideNavBar";
import "./MainPage.css";
import MealTypeCard from "../../components/MealTypeCard/index";
import CuisineTypeCard from "../../components/CuisineTypeCard/index";
import {
  breakfastImage,
  lunchImage,
  dinnerImage,
  snackImage,
  americanImage,
  italianImage,
  mexicanImage,
  chineseImage,
} from "./helpers.js";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="mainPageContainer">
        <SideBarNav />
        <div className="mainPageContentContainer">
          <h1 id="mainPageHeading">What's on your mind?</h1>
          <h2 id="categoryHeading">Meal Type</h2>
          <div className="mealTypeContainer">
            <Link to="/search">
              {" "}
              <MealTypeCard
                title="Breakfast Recipes"
                imageSrc={breakfastImage}
              />
            </Link>
            <Link to="/search">
              {" "}
              <MealTypeCard title="Lunch Recipes" imageSrc={lunchImage} />
            </Link>
            <Link to="/search">
              {" "}
              <MealTypeCard title="Dinner Recipes" imageSrc={dinnerImage} />
            </Link>
            <Link to="/search">
              {" "}
              <MealTypeCard title="Snack Recipes" imageSrc={snackImage} />
            </Link>
          </div>
          <h2 id="categoryHeading">Cuisine Type</h2>
          <div className="cuisineTypeContainer">
            <Link to="/search">
              {" "}
              <CuisineTypeCard
                title="American Recipes"
                imageSrc={americanImage}
              />
            </Link>
            <Link to="/search">
              {" "}
              <CuisineTypeCard
                title="Mexican Recipes"
                imageSrc={mexicanImage}
              />
            </Link>
            <Link to="/search">
              {" "}
              <CuisineTypeCard
                title="Italian Recipes"
                imageSrc={italianImage}
              />
            </Link>
            <Link to="/search">
              {" "}
              <CuisineTypeCard
                title="Chinese Recipes"
                imageSrc={chineseImage}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
