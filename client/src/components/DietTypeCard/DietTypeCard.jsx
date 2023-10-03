import { Link } from "react-router-dom";

const diettypes = [
  {
    Name: "Simon",
    Age: "23",
    Gender: "Male",
  },
];

const ThoughtList = ({
  thoughts,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!thoughts.length) {
    return <h3>No Thoughts Yet</h3>;
  }

  return <div>{diettypes.map((diettype) => {})}</div>;
};

export default ThoughtList;
