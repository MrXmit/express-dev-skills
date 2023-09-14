import { Skill } from '../models/skill.js';

function index(req, res) {
    Skill.find({})
    .then(skills => {
      res.render('skills/index', {
        skills: skills,
        time: req.time
      })
    })
    .catch(error => {
      console.log(error)
      res.redirect('/')
    })
  }
  
  function newSkill(req, res) {
    res.render('skills/new')
  }
  
  function create(req, res) {
    req.body.done = false
    Skill.create(req.body)
    .then(skill => {
      res.redirect('/skills')
    })
    .catch(error => {
      console.log(error)
      res.redirect('/skills')
    })
  }
  function deleteskill(req, res) {
    skill.findByIdAndDelete(req.params.skillId)
    .then(skill => {
      res.redirect('/skills')
    })
    .catch(error => {
      console.log(error)
      res.redirect('/skills')
    })
  }
//   function show(req, res) {
//     Todo.findById(req.params.todoId)
//     .then(todo => {
//       res.render('todos/show', {
//         todo: todo
//       })
//     })
//     .catch(error => {
//       console.log(error)
//       res.redirect('/todos')
//     })
//   }
  

export{
    index,
    newSkill as new,
    create,
    deleteskill as delete,
    // show
}