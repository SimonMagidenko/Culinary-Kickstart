import { useQuery } from "@apollo/client";

import ThoughtList from "../components/ThoughtList";
import ThoughtForm from "../components/ThoughtForm";

import { QUERY_THOUGHTS } from "../utils/queries";

const diettypes = ["Simon", "Harry", "Dylan"];

const Home = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const thoughts = data?.thoughts || [];

  return (
    <>
      <div>3 cards</div>
      <div>
        {diettypes.map((diettype) => {
          <DiettypeComponent diettype={diettypes} />;
        })}
      </div>
    </>
  );
};

export default Home;
