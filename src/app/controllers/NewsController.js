class NewsController{
    index(req,res){
        res.render("home",{
            title:"Homepage",
            message:"HA thanh Phong"
        })
    }

    show(req, res){
        res.send("News detail")
    }
}

module.exports = new NewsController()