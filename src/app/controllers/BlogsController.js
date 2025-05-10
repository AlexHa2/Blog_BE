const Blog = require('../models/blog');

class BlogsController {
    async index(req, res) {
        const blogs = await Blog.find({});
        if (blogs.length > 0) {
            res.json(blogs);
            return;
        } else {
            res.send('No blogs found');
        }
    }
}

module.exports = new BlogsController();
