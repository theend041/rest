const express = require('express');
const router = express.Router();
const PostModel = require('../models/postModel');


//Get All Posts
router.get('/', async (req, res) => {
    try {
        const showPosts = await PostModel.find();
        res.json(showPosts);
    } catch (err) {
        res.json({
            message: err
        });
    }
});

//Submit Posts
router.post('/', async (req, res) => {
    const post = new PostModel({
        title: req.body.title,
        description: req.body.description,
    });

    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({
            message: err
        });
    }
});

//Get Specific Posts
router.get('/:postId', async (req, res) => {
    try {
        const singlePost = await PostModel.findById(req.params.postId);
        res.json(singlePost);
    } catch (err) {
        res.json({
            message: err
        });
    }
});

//Delete specific Post
router.delete('/:postId', async (req, res) => {
    try {
        const removePost = await PostModel.remove({
            _id: req.params.postId
        });
        res.json(removePost);
    } catch (err) {
        res.json({
            message: err
        });
    }

});

//Update Post
router.patch('/:postId', async (req, res) => {
    try {
        const updatePost = await PostModel.updateOne({
            _id: req.params.postId
        }, {
            $set: {
                title: req.body.title
            }
        });
        res.json(updatePost);
    } catch (err) {
        res.json({
            message: err
        });
    }
});

module.exports = router;