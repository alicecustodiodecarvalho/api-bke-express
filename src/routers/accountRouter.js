import express from 'express'
import createController from '../controllers/account/createController.js'
import listController from '../controllers/account/listControlller.js'
import getByIdController from '../controllers/account/getByIdController.js'
import updateController from '../controllers/account/updateController.js'
import deleteController from '../controllers/account/deleteController.js'

const router = express.Router()

router.post('/', createController)
router.get('/list', listController)
router.get('/:id', getByIdController)
router.put('/:id', updateController)
router.delete('/:id', deleteController)


export default router 