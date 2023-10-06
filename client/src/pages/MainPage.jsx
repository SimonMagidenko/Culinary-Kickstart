import { useQuery } from "@apollo/client";

import SideBarNav from "../components/SideNavBar/SideNavBar";
import HeaderBar from "../components/Header/Header";

const Home = () => {
  const styles = {
    main: {
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      height: "100vh",
    },
    headerBar: {},
    sideBarNav: {
      display: "inline-flex",
      flexDirection: "column",
      position: "relative",
      width: "7vw",
    },
  };
  return (
    <div className="main">
      <div className="headerBar" style={styles.headerBar}>
        <HeaderBar />
      </div>
      <div className="sideBarNav" style={styles.sideBarNav}>
        <SideBarNav />
      </div>
    </div>
  );
};

export default Home;
