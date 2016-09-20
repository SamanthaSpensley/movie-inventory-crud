var express = require('express');
var router = express.Router();
var query = require('../db/query');

/* GET request */
router.get('/', getIndexPage);
router.get('/movie/new', createNewMovie)
router.get('/movie/edit/:id', editMovie)

/* POST request */
router.post('/', postNewMovie)
router.post('/movie/edit/:id', postEdit)


function getIndexPage(req, res, next) {
  query.getAllMovies()
  .then(function(results) {
    res.render('index', {
      title: 'Movie Inventory',
      movies: results
    });
  })
}

function createNewMovie(req, res, next) {
  res.render('new');
}

function editMovie(req, res, next) {
  query.getMovieById(req.params.id).first()
  .then(function(results) {
    res.render('edit', {
      movies: results
    });
  })
}


/* POST requests */
function postNewMovie(req, res, next) {
  query.createNewMovie(req.body.title, req.body.imageURL, req.body.type, req.body.year, req.body.rating, req.body.description, req.body.note)
  .then(function() {
    res.redirect('/')
  })
}

function postEdit(req, res, next) {
  
}

module.exports = router;
