const express = require('express');
const homeController = require('../controllers/homeController');
const router = express.Router();

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router.get('/home', homeController.home);
router.post('/upload',upload.array("files"), homeController.read)

module.exports = router;