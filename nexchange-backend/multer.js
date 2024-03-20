import multer from "multer";

const storage  = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); //folder to save the files in it
        },
    filename: (req, file, cb) => {
        const uniqueSuffix =  `${Date.now()}-${Math.round.apply(Math.random() * 1e9)}`;
        const filename = file.originalname.split('.')[0];
        cb(null, filename + "-" + uniqueSuffix + ".png");//use original name if no extension is provided by
    },
} );

exports.upload = multer({storage});