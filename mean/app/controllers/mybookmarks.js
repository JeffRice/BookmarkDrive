/**
* Module dependencies.
*/
var mongoose = require('mongoose'),
    async = require('async'),
    Mybookmark = mongoose.model('Bookmark'),
    _ = require('underscore');

/**
* Find mybookmark by id
*/
exports.mybookmark = function(req, res, next, id) {
    mybookmark.load(id, function(err, mybookmark) {
        if (err) return next(err);
        if (!mybookmark) return next(new Error('Failed to load mybookmark ' + id));
        req.mybookmark = mybookmark;
        next();
    });
};

/**
* Create a mybookmark
*/
exports.create = function(req, res) {
    var mybookmark = new mybookmark(req.body);
    mybookmark.user = req.user;

    mybookmark.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                mybookmark: mybookmark
            });
        } else {
            res.jsonp(mybookmark);
        }
    });
};

/**
* Update a mybookmark
*/
exports.update = function(req, res) {
    var mybookmark = req.mybookmark;

    mybookmark = _.extend(mybookmark, req.body);

    mybookmark.save(function(err) {
        res.jsonp(mybookmark);
    });
};

/**
* Delete a mybookmark
*/
exports.destroy = function(req, res) {
    var mybookmark = req.mybookmark;

    mybookmark.remove(function(err) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(mybookmark);
        }
    });
};

/**
* Show a mybookmark
*/
exports.show = function(req, res) {
    res.jsonp(req.mybookmark);
};

/**
* List of mybookmarks
*/
exports.all = function(req, res){

    var query = {};

Mybookmark.find(query).where({}).sort('-created').populate('user', 'name username').exec(function(err, mybookmarks) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(mybookmarks);
        }
    });
};

exports.agg = function(req, res){
Mybookmark.aggregate(  
    { $match: { category: 'dinosaurs'}}, // 'group' goes first!
    function(err, mydinobookmarks) {
        res.jsonp(mydinobookmarks);
    }
);
};
