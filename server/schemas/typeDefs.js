const typeDefs = `
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    savedRecipes:[Recipe]
  }

  type Review {
    _id: ID
    userID: String!
    text: String!
  }

  type Recipe {
    _id: ID
    name: String
    reviews:[Review]
    ingredient: [String]
    image: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type API{
    api_id: String!
    api_key: String!
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
    searchFood: API
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
