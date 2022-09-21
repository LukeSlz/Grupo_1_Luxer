const express = require('express');
const router = express.Router();
const usersApiController = require('../../controllers/APIs/usersApiController');

router.get('/list', usersApiController.list);
router.get('/detail/:id', usersApiController.detail);


module.exports = router;