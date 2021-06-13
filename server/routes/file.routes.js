const Router  = require('express')
const router = new Router()
const authMiddleware = require('../middleware/auth.middleware')
const fileController = require('../controller/fileController')

router.post('', authMiddleware, fileController.createDir)
router.post('/upload', authMiddleware, fileController.uploadFile)
router.get('', authMiddleware, fileController.getFilse)
router.get('/download', authMiddleware, fileController.dowloandFile)
router.delete('/', authMiddleware, fileController.deleteFile)

module.exports = router;
