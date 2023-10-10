import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
      email
    }
  }
}
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      username
      email
      }
    }
}
`;
export const SAVE_RECIPE = gql`
  mutation saveRecipe($userId: ID!, $name: String!, $ingredients: [String]!) {
  saveRecipe(userId: $userId, name: $name, ingredients: $ingredients) {
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
export const ADD_RECIPE = gql`
  mutation addRecipe($name: String!, $ingredients: [String]) {
  addRecipe(name: $name, ingredients: $ingredients) {
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
