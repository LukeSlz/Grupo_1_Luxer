

const createModify = (req, res, next)=>{
    console.log('New product created');
    next();
}

module.exports = createModify;