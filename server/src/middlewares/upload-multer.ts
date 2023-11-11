import multer from 'multer'
import path from 'node:path'

export const uploadMulter = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, path.resolve(__dirname, '../..', 'uploads'))
    },
    filename(req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}`)
    },
  }),
})
