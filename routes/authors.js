const express = require('express')
const router = express.Router()
const Author = require('../models/author')

router.get('/', async (req, res) => {
    try {
        let authors = await Author.find({})
        res.render('authors/index',{authors:authors})
    }
    catch{res.render('/')}
})

router.get('/new', (req, res) => {
    res.render('authors/new', { author: new Author() })
})

router.post('/', async (req, res) => {
    const author = new Author({ name: req.body.name })
    try {
        let newAuthor = await author.save()
        // res.redirect(`authors/${newAuthor.id}`)
        res.redirect(`authors`)
    }
    catch (err) {
        res.render('authors/new', { author: author, errorMessage: 'Error creating Author' })
    }
    // author.save((err,newAuthor)=>{
    //     if(err){
    //         res.render('authors/new',{author:author,errorMessage:'Error creating Author'})
    //     }else{
    //         // res.redirect(`authors/${newAuthor.id}`)
    //         res.redirect(`authors`)
    //     }
    // })
})

module.exports = router