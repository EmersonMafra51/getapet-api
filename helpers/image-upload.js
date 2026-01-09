const multer = require("multer")
const path = require("path")

const imageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    let folder = ""

    if (req.baseUrl.includes("users")) folder = "users"
    else if (req.baseUrl.includes("pets")) folder = "pets"
    else folder = "misc"

    cb(null, `public/images/${folder}`)
  },

  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname).toLowerCase()
    const unique = `${Date.now()}-${Math.round(Math.random() * 1e9)}`
    cb(null, `${unique}${ext}`)
  },
})

const imageUpload = multer({
  storage: imageStorage,

  fileFilter(req, file, cb) {
    const ext = path.extname(file.originalname).toLowerCase()

    const allowed = [".png", ".jpg", ".jpeg"]
    if (!allowed.includes(ext)) {
      return cb(new Error("Por favor, envie apenas fotos no formato jpeg, jpg ou png!"))
    }

    cb(null, true)
  },
})

module.exports = { imageUpload }
