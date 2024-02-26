const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();

const upload = multer({storage : multer.diskStorage({
    destination: './upload/image',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
});

router.use('/image', express.static('upload/image'));

router.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        status : 200,
        image_url : `http://localhost/${8000}/image/${req.file.filename}`
    })
});

module.exports = router;
