const express = require('express');
const router = express.Router();
const skillsController=require('../controllers/skills')

/* GET users listing. */
router.get('/', skillsController.index);

// GET/ skills/new
router.get('/new',skillsController.new)

router.get('/:id', skillsController.show)

// POST/skills
router.post('/', skillsController.create)

router.delete('/:id',skillsController.delete)

module.exports = router;



