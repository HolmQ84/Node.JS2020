const util = require("util");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
const databaseUrl = "mongodb://localhost:27017/meme_website_db/memes"

const storage = new GridFsStorage({
    url: databaseUrl,
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (req, file) => {
        const match = ["image/png", "image/jpeg"];

        if (match.indexOf(file.mimetype) === -1) {
            return `${Date.now()}-meme-${file.originalname}`;
        }

        return {
            bucketName: "photos",
            filename: `${Date.now()}-meme-${file.originalname}`
        };
    }
});

const uploadFile = multer({ storage: storage }).single("file");
const uploadFilesMiddleware = util.promisify(uploadFile);
module.exports = uploadFilesMiddleware;