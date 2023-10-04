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
  }

  type Ingredient {
    _id: ID
    name: String
    quantity: Int
    measure: String
    weight: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
