const mongoose = require('mongoose')
const mongoURL ='mongodb://localhost:27017/tokobuku';
mongoose.connect(mongoURL,
    err => {
        if(err) throw err;
        console.log('Berhasil Konek ke Mongo')
    });