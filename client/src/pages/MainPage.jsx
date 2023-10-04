import { useQuery } from "@apollo/client";


import { QUERY_THOUGHTS } from "../utils/queries";


const Home = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const thoughts = data?.thoughts || [];

  return (
    <>
    </>
  );
};

export default Home;
