const { Router } = require('express');
const router = Router();

const Blog = require('../models/blog');

router.post('', (req, res) => {
    // const blog = new Blog({
    //     title: 'new blog',
    //     snippet: 'about my new blog',
    //     body: 'more about my new blog'
    // });
    const blog = new Blog(req.body);

    blog.save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
});

router.get('', (req, res) => {
    Blog.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
});

router.get('/:id', (req, res) => {
    const {
        id
    } = req.params;

    Blog.findById(id)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
});

module.exports = router;
