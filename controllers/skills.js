const skillsDb = require('../models/skill')

const index = (req, res) => {
  skills=skillsDb.getAll()
  res.render('skills/index',{skills})
}

const show = (req, res) => {
  eachSkill = skillsDb.getOne(req.params.id)
  console.log("eachSkill:", eachSkill); 
  res.render('skills/show',{eachSkill})
}

module.exports = {
  index,show
}