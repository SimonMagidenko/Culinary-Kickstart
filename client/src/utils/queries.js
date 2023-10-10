import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
  user(username: $username) {
    _id
    username
    email
    }
}
`;

export const QUERY_GRAB_API = gql`
query GrabAPI {
  grabAPI {
    api_id
    api_key
  }
}
`;

export const QUERY_ME = gql`
  query getMe {
  me {
    _id
    username
    email
    }
  }
`;
export const QUERY_RECIPE = gql`
  query searchRecipe($query: String!) {
  searchFood(query: $query) {
    _id
    name
    ingredient
    image
    reviews {
      _id
      text
      userID
    }
  }
}
`;
export const QUERY_USERS = gql`
  query users {
  users {
    _id
    username
    email
    }
}
`;
export const QUERY_RECIPES = gql`
  query getRecipes {
  getRecipes {
    _id
    name
    ingredient
    image
    reviews {
      _id
      userID
      text
    }
  }
}
`;