import SideBarNav from "../../components/SideNavBar/SideNavBar";
import HeaderBar from "../../components/Header/Header";
import "../../pages/MainPage";

const Home = () => {
  return (
    <div className="main">
      <div className="headerBar">
        <HeaderBar />
      </div>
      <div className="sideBarNav">
        <SideBarNav />
      </div>
    </div>
  );
};

export default Home;
