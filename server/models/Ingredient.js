const { Schema, model } = require('mongoose');
const { schema } = require('./Review');

const ingredientSchema = new Schema({
    name: {
        type: String
    },
    quantity: {
        type: Number
    },
    measure: {
        type: String
    },
    weight: {
        type: Number
    }
});

const Ingredient = model('Ingredient', ingredientSchema);

module.exports = Ingredient;
