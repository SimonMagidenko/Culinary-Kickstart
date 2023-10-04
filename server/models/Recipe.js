const { Schema, model } = require('mongoose');

const recipeSchema = new Schema({
  name: {
    type: String,
    ingredients: [{
      type: Schema.Types.ObjectId,
      ref: 'Ingredient',
    }],
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Review',
      }
    ]
  }
});

const Recipe = model('Recipe', recipeSchema);

module.exports = Recipe;
