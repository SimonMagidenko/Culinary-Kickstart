const { Schema, model } = require('mongoose');

const reviewSchema = new Schema({
    userID: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true
    }
});

const Review = model('Recipe', reviewSchema);

module.exports = Review;