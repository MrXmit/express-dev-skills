import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'

const router = Router()

// GET localhost:3000/users
router.get('/', function (req, res) {
  res.render('skills/index', {
    skills: skillsCtrl.skills
  })

})

export { router }

//     skills: skillsCtrl.getSkills()
