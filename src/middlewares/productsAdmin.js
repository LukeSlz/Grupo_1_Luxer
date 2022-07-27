

module.exports = {
    createdItem: (req, res, next)=>{
        console.log('New product created');
        next();
    },
    editedItem: (req, res, next)=>{
        console.log('The item with id:' + req.params.id + ' was edited');
        next();
    },
    deletedItem: (req, res, next)=>{
        console.log('The item with id:' + req.params.id + ' was deleted');
        next();    
    }
}