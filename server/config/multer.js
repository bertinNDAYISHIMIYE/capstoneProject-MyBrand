import multer from "multer";
const storage = multer.diskStorage({});
import path from "path";
const fileFilter = (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Images Only!', null);
    }
}
export const upload = multer({
    dest: "uploads/",
     storage: storage ,
     limits : {fileSize : 1000000},
     fileFilter: fileFilter
});