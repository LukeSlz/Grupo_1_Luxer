module.exports = {
    onlyForGuest: (req, res, next) => {
        if (req.session.user){
            return res.redirect("/users/"+ req.session.user.id);
        }
        next();
    },
    isLogged: (req, res, next) => {
        if(req.session.user){
            next();
        }else{
            return res.redirect('/login')
        }
    },
    sameUser: (req, res, next) => {
        if(req.session.user){
            let loggedUser = req.session.user;
            console.log(loggedUser);
            if(loggedUser.id == req.params.id || loggedUser.category_id == 9){
                next();
            }else{
                res.redirect('/');
            }
        }else{
            res.redirect('/login')
        }
    }
}
