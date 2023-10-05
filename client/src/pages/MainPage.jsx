import { useQuery } from "@apollo/client";

import SideBarNav from "../components/SideNavBar/SideNavBar";

const Home = () => {
  const styles = {
    main: {},
  };
  return (
    <div className="main" style={styles.main}>
      <SideBarNav />
    </div>
  );
};

export default Home;
