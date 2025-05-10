const newsRouter = require('./news');
const blogsRouter = require('./blogs');

function router(app) {
    app.use('/news', newsRouter), app.use('/blogs', blogsRouter);
}

module.exports = router;
