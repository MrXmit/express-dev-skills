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
    console.log(req.body)
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
  function show(req, res) {
    Skill.findById(req.params.skillId)
    .then(skill => {
      res.render('skills/show', {
        skill: skill
      })
    })
    .catch(error => {
      console.log(error)
      res.redirect('/todos')
    })
  }
  

export{
    index,
    newSkill as new,
    create,
    deleteskill as delete,
    show
}