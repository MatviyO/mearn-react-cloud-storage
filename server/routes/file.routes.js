const Router  = require('express')
const router = new Router()
const authMiddleware = require('../middleware/auth.middleware')
const fileController = require('../controller/fileController')

router.post('', authMiddleware, fileController.createDir)
router.post('/upload', authMiddleware, fileController.uploadFile)
router.post('/avatar', authMiddleware, fileController.uploadAvatar)
router.delete('/avatar', authMiddleware, fileController.deleteAvatar)
router.get('', authMiddleware, fileController.getFilse)
router.get('/download', authMiddleware, fileController.dowloandFile)
router.get('/search', authMiddleware, fileController.searchFile())
router.delete('/', authMiddleware, fileController.deleteFile)

module.exports = router;
