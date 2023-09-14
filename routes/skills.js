import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'

const router = Router()

router.get('/', skillsCtrl.index)
router.get('/new', skillsCtrl.new)
router.post('/', skillsCtrl.create)
// router.get('/:skillId', skillsCtrl.show)


export { router }

//     skills: skillsCtrl.getSkills()
