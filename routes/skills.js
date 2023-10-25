const express = require('express');
const router = express.Router();
const skillsController=require('../controllers/skills')

/* GET users listing. */
router.get('/', skillsController.index);
router.get('/:id',skillsController.show)

module.exports = router;
