const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();

// 1. Configure Storage (Destination and Filename)
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Ensure this folder exists
    },
    filename: (req, file, cb) => {
        // Rename file to prevent conflicts: timestamp-originalName
        console.log('Original filename:', file.originalname);
        console.log('New filename:', Date.now() + path.extname(file.originalname));
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// 2. Create Upload Route (single file named 'myFile')
app.post('/upload', upload.single('myFile'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    res.send(`File uploaded: ${req.file.path}`);
});

app.listen(3000, () => console.log('Server started on port 3000'));



// // 🔴 Check if file already exists
// if (fs.existsSync(filePath)) {
//     return cb(new Error('File already exists!'), false);
// }

// // ✅ Save with original name
// cb(null, file.originalname);
//     }
// });

// const upload = multer({ storage: storage });
