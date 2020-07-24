const express = require('express');
const router =  express.Router();
const Post = require('../models/Post');


//get back all the posts
router.get('/', async (req,res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message:err});
    }
});

//submit the posts
router.post('/', async (req,res) => {
    const post = new Post({
        tittle: req.body.tittle,
        description: req.body.description
    });
    try{
        const savedPost = await post.save();
        res.json(savedPost);
    }catch(err){
        res.json({message: err});
    }
    
})

//find post
router.get('/:postId', async (req,res) =>{
    try{
    const post = await Post.findById(req.params.postId);
    res.json(post);
    }catch(err){
        res.json({message: err});
    }
})

//delete some post
router.delete('/:postId', async (req,res) => {
    try{
        const removedPost = await Post.remove({_id: req.params.postId})
        res.json(removedPost);
    }catch(err){
        res.json({message: err});
    }
    
})

//update some post
router.patch('/:postId', async (req,res) => {
    try{
        const updatedPost = await Post.updateOne(
            {_id: req.params.postId},
            { $set: {tittle: req.body.tittle} }
        );
        res.json(updatedPost);
    }catch(err){
        res.json({message: err});
    }
    
})

module.exports = router;