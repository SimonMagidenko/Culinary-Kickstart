import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Outlet } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import HeaderBar from "../src/components/Header/Header";



const theme = extendTheme({
  colors: {
    brand: {
      red: "#FF6347",
      white: "#FDF5E6",
      green: "#556B2F",
      yellow: "#FFD700",
      grey: "#CCCCCC",
      darkGrey: "#333333",
    },
  },
});
// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ApolloProvider client={client}>
        <HeaderBar />
        <Outlet />
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default App;
