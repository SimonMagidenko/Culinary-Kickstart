const { ConnectionStates } = require('mongoose');
const { User, Ingredient, Review, Recipe } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const API_ID = process.env.API_ID;
const API_KEY = process.env.API_KEY;

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
        return User.findOne({ _id: context.user._id }).populate('savedRecipes');
      }
      throw AuthenticationError;
    },
    searchFood: async () => {
      try {
        // console.log(API_ID);
        // const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${API_ID}&app_key=${API_KEY}`)
        // const data = await response.json()
        // console.log(data);
        const api = {
          api_id:API_ID,
          api_key:API_KEY
        }
        console.log(api);
        return api
      } catch (error) {
        return error
      }
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
