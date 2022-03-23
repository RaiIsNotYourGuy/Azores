const express = require('express');
const router = express.Router({ mergeParams: true });
const catchAsync = require('../utils/catchAsync');
const { postSchema } = require('../schema');
const { validatePost, isLoggedIn, isPostAuthor, postDateShort } = require('../middleware');
const posts = require('../controllers/posts.controller');

router.route('/')
    .get(function(req, res) {
        res.redirect('/');
    })
    .post(isLoggedIn, validatePost, catchAsync(posts.createPost))

router.get('/new', isLoggedIn, posts.renderNewForm)

router.route('/:id')
    .get(catchAsync(posts.showPost))
    .put(isLoggedIn, validatePost, catchAsync(posts.updatePost))
    .delete(isLoggedIn, isPostAuthor, catchAsync(posts.deletePost))

router.get('/:id/edit', isLoggedIn, isPostAuthor, catchAsync(posts.renderEditForm))

module.exports = router;