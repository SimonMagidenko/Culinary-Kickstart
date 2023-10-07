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
    grabAPI: async () => {
      try {
        const api = {
          api_id: API_ID,
          api_key: API_KEY
        }
        return api
      } catch (error) {
        return error
      }
    },
    getRecipes: async (_, __, context) => {
      if (!context.user) {
        throw new Error('Must be logged in to view saved recipes.');
      }

      try {
        const user = await User.findById(context.user._id).populate('savedRecipes');

        if (!user) {
          throw new Error('User not found.');
        }
        return user.savedRecipes;
      } catch (error) {
        throw new Error('Failed to fetch recipes by current user');
      }
    },
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
    addReview: async (_, { userID, text }) => {
      try {
        const savedReview = await Review.create({ userID, text });
        return savedReview;
      } catch (error) {
        throw new Error('Failed to add review');
      }
    },
    saveRecipe: async (_, { userId, name, ingredients }) => {
      try {

        const savedRecipe = await Recipe.create({ userId, name, ingredients });


        await User.findByIdAndUpdate({ _id: context.user._id }), {
          $addToSet: { savedRecipes: savedRecipe._id },
        };

        return savedRecipe;
      } catch (error) {
        throw new Error('Failed to add recipe to user');
      }
    },
    addRecipe: async (_, { name }) => {
      try {

        const savedRecipe = await Recipe.create({ name });

        return savedRecipe;
      } catch (error) {
        throw new Error('Failed to add recipe.');
      }
    },
  },
};

module.exports = resolvers;
