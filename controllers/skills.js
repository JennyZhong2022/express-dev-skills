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

const newSkill= (req,res) => {
  res.render('skills/new',{title:'New Todo'})
}

const create = (req, res) => {
  console.log(req.body);
  skillsDb.create(req.body)
  res.redirect('/skills')
}

const deleteOne = (req, res) => {
  skillsDb.deleteOne(req.params.id)
  res.redirect('/skills')
}

module.exports = {
  index,show,new:newSkill,create,delete:deleteOne
}