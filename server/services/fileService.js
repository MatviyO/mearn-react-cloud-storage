const fs = require('fs')
const File = require('../models/FIle')
const config = require('config')


class FileService {
    createDir(file) {
        console.log(file)
        const filePath = `${config.get('filePath')}\\${file.user}\\${file.path}`
        console.log(filePath)
        return new Promise(((resolve, reject) => {
            try {
                if (!fs.existsSync(filePath)) {
                    fs.mkdirSync(filePath)
                    return resolve({message: 'File was created'})
                } else {
                    return reject( {message: 'File already exist+'})
                }
            } catch (e) {
                return reject({message: 'File error'})
            }
        }))
    }
}
module.exports = new FileService()
