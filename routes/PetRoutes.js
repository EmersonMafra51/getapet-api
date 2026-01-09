const router = require('express').Router()

const PetController = require('../controllers/PetController')

//MIDDLEWARES
const verifyToken = require('../helpers/verify-token')
const { imageUpload } = require('../helpers/image-upload')



router.post('/create',verifyToken,imageUpload.array('images'), PetController.create)
router.get('/', PetController.getAll)
router.get('/mypets',verifyToken, PetController.getAllUserPets)
router.get('/myadopitions', verifyToken, PetController.getAllUserAdoptions)

module.exports = router  