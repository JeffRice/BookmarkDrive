/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    async = require('async'),
    Bookmark = mongoose.model('Bookmark'),
    _ = require('underscore');


/**
 * Find bookmark by id
 */
exports.bookmark = function(req, res, next, id) {
    Bookmark.load(id, function(err, bookmark) {
        if (err) return next(err);
        if (!bookmark) return next(new Error('Failed to load bookmark ' + id));
        req.bookmark = bookmark;
        next();
    });
};

/**
 * Create a bookmark
 */
exports.create = function(req, res) {
    var bookmark = new Bookmark(req.body);
    bookmark.user = req.user;

    bookmark.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                bookmark: bookmark
            });
        } else {
            res.jsonp(bookmark);
        }
    });
};

/**
 * Update a bookmark
 */
exports.update = function(req, res) {
    var bookmark = req.bookmark;

    bookmark = _.extend(bookmark, req.body);

    bookmark.save(function(err) {
        res.jsonp(bookmark);
    });
};

/**
 * Delete a bookmark
 */
exports.bookmark = function(req, res) {
    var bookmark = req.bookmark;

    bookmark.remove(function(err) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(bookmark);
        }
    });
};

/**
 * Show a bookmark
 */
exports.show = function(req, res) {
    res.jsonp(req.bookmark);
};

/**
 * List of Bookmarks
 */
exports.all = function(req, res) {
    Bookmark.find().sort('-created').populate('user', 'name username').exec(function(err, bookmarks) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(bookmarks);
        }
    });
};