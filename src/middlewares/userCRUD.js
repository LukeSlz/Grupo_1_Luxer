function guestMiddleware(req, res, next){
    if (req.session.user){
        return res.redirect("/products/create");
    }
    next();
}

module.exports = guestMiddleware;