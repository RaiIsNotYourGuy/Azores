const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    roles: String,
    memberships: {
        type: Schema.Types.ObjectId,
        ref: 'Community',
        unique: true,
    },
    posts: {
        type: Schema.Types.ObjectId,
        ref: 'Posts'
    },
    comments: {
        type: Schema.Types.ObjectId,
        ref: 'Comments'
    }
})
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);