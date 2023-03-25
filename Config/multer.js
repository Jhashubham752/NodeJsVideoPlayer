const multer = require("multer");


//where to store

const storage = multer.diskStorage({
    destination:(req,file ,callback) => {
        callback(null,"public/gallery");
    },
    filename:(req,file,callback) => {
        callback(null,Date.now() + file.originalname);
    }
});
//filename
module.exports = {storage};