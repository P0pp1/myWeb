const express = require('express')
const router = express.Router()
const Book = require('../models/book')
const Author = require('../models/author')

router.get('/', async (req, res) => {
    try {
        let books = await Book.find({})
        res.render('books/index', { books: books })
    }
    catch { res.render('/') }
})

router.get('/new', async (req, res) => {
    try {
        let authors = await Author.find({})
        res.render('books/new', { authors: authors, book: new Book() })
    } catch { res.render('/') }
})

router.post('/', (req, res) => { })

module.exports = router