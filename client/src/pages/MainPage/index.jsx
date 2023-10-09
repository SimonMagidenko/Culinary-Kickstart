import SideBarNav from "../../components/SideNavBar/SideNavBar";
import HeaderBar from "../../components/Header/Header";
import "./MainPage.css";
import MealTypeCard from "../../components/MealTypeCard/index";
import {
  breakfestImage,
  lunchImage,
  dinnerImage,
  snackImage,
} from "./helpers.js";
const Home = () => {
  return (
    <>
      <HeaderBar />
      <div className="mainPageContainer">
        <SideBarNav />
        <div className="mainPageContentContainer">
          <div className="mealTypeContainer">
            <MealTypeCard title="Breakfast" imageSrc={breakfestImage} />
            <MealTypeCard title="Lunch" imageSrc={lunchImage} />
            <MealTypeCard title="Dinner" imageSrc={dinnerImage} />
            <MealTypeCard title="Snacks" imageSrc={snackImage} />
          </div>
          <h1 id="mealTypeHeading">What's on your mind?</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
