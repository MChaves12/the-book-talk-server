import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firtsName: {
        type: String,
        required: true,
        min: 2,
        max: 50
    },
    lastName: {
        type: String,
        required: true,
        min: 2,
        max: 50
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max: 50
    },
    password: {
        type: String,
        riquired: true,
        min: 6
    },
    picturePath: {
        type: String,
        default: ''
    },
    friends: {
        type: Array,
        default: []
    },
    location: String,
    occupation: String,
    viewedProfile: Number,
    impressions: Number
}, 
{ timestamps: true}
);

module.exports = model('User', userSchema);
