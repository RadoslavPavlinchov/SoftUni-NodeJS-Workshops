const mongoose = require('mongoose');

const CubeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxlength: 60
    },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
              return /^(https|http)/.test(v);
            },
            message: props => `${props.value} is not a valid protocol for the image!`
        }
    },
    difficultyLevel: {
        type: Number,
        required: true,
        min: 1,
        max: 6
    },
    accessories: [{
        type: 'ObjectId',
        ref: 'Accessory'
    }]
});

module.exports = mongoose.model('Cube', CubeSchema);