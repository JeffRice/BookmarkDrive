/**
 * Module dependencies.
 */
var should = require('should'),
    app = require('../../server'),
    mongoose = require('mongoose'),
    User = mongoose.model('User'),
    Bookmark = mongoose.model('Bookmark');

//Globals
var user;
var bookmark;

//The tests
describe('<Unit Test>', function() {
    describe('Model Bookmark:', function() {
        beforeEach(function(done) {
            user = new User({
                name: 'Full name',
                email: 'test@test.com',
                username: 'user',
                password: 'password'
            });

            user.save(function(err) {                
                bookmark = new Bookmark({
                    title: 'Bookmark Title',
                    content: 'Bookmark Content',
                    user: user
                });

                done();
            });
        });

        describe('Method Save', function() {
            it('should be able to save whithout problems', function(done) {
                return bookmark.save(function(err) {
                    should.not.exist(err);
                    done();
                });
            });

            it('should be able to show an error when try to save witout title', function(done) {
                bookmark.title = '';

                return bookmark.save(function(err) {
                    should.exist(err);
                    done();
                });
            });
        });

        afterEach(function(done) {
            done();
        });
    });
});