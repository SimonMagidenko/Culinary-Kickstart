const { User, Ingredient, Review, Recipe } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
require('dotenv').config();

const API_ENDPOINT = 'https://api.edamam.com/api/recipes/v2';

const query = 'chicken';

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('savedRecipes');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('savedRecipes');
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('thoughts');
      }
      throw AuthenticationError;
    },
    searchFood: async (_, {query}) => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`)
      const data = response.json()
      console.log(data);
    }
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
