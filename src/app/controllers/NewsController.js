class NewsController {
    index(req, res) {
        res.render('home', {
            title: 'home page',
        });
    }

    show(req, res) {
        res.send('News detail');
    }
}

module.exports = new NewsController();
