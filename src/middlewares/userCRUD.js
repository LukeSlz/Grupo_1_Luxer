module.exports = {
    create:  (req, res, next) => {
        if (req.session.user) {
            next();
        } else {
            return res.redirect("/");
        }
    },

    update:  (req, res, next) => {
        if (req.session.user) {
            next();
        } else {
            return res.redirect("/");
        }
    },

    delete:  (req, res, next) => {
        if (req.session.user) {
            next();
        } else {
            return res.redirect("/");
        }
    }
};