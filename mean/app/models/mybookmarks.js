/**
* Module dependencies.
*/
var mongoose = require('mongoose'),
    config = require('../../config/config'),
    Schema = mongoose.Schema;


/**
* Mybookmark Schema
*/
var MybookmarkSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        default: '',
        trim: true
    },
    address: {
        type: String,
        default: '',
        trim: true
    },
    description: {
        type: String,
        default: '',
        trim: true
    },
    category: {
        type: String,
        default: '',
        trim: true
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});


/**
*Validations
*/
MybookmarkSchema.path('title').validate(function(title) {
    return title.length;
}, 'Title cannot be blank');


/**
* Statics
*/
MybookmarkSchema.statics = {
    load: function(id, cb) {
        this.findOne({
            _id: id
        }).populate('user', 'name username').exec(cb);
    }
};

mongoose.model('Mybookmark', MybookmarkSchema);


