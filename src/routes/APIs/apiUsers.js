const express = require('express');
const router = express.Router();
const usersApiController = require('../../controllers/APIs/usersApiController');

router.get('/', usersApiController.list);
router.get('/:id', usersApiController.detail);


module.exports = router;