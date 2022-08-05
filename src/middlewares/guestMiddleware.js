module.exports = {
    onlyForGuest: (req, res, next) => {
        if (req.session.user){
            return res.redirect("/logout");
        }
        next();
    },
    isLogged: (req, res, next) => {
        if(req.session.user){
            next();
        }else{
            return res.redirect('/login')
        }
    }
}
