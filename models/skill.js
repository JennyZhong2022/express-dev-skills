const skills = [
  { id: 1, tech: "js", level: "excellent" },
  { id: 2, tech: "node", level: "learning" },
  { id: 3, tech: "react", level: "good" },
  { id: 4, tech: "python", level: "proficient" },
  { id: 5, tech: "html", level: "excellent" },
  { id: 6, tech: "css", level: "good" }
];


const getAll = () => {
  return skills
}

const getOne = (id) => {
  id = parseInt(id);
 return skills.find((skill)=>skill.id===id)
}

const create= (skill) => {
  skill.id = Date.now() % 100,
  skill.level = "good",
  skills.push(skill)  
    
}

const deleteOne = (id) => {
  id = parseInt(id);
  const idx= skills.findIndex((skill) => skill.id === id)
  skills.splice(idx,1)
}

module.exports = {
  getAll,getOne,create,deleteOne
}
