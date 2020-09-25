const monogoose = require('mongoose')

const bookSchema = new monogoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    publishDate: {
        type: Date,
        required: true
    },
    pageCount: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    coverImage:{
        type:String,
        required:true
    },
    author:{
        type:monogoose.Schema.Types.ObjectId,
        required:true,
        ref:'Author'
    }
})

module.exports = monogoose.model('Book', bookSchema)