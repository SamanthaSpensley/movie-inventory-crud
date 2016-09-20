// var bcrypt = require('bcrypt');
var knex = require('./knex')

function Movies() {
  return knex('movies').orderBy('movies.year', 'desc')
}

function GetMovieById(id) {
  return Movies().select().where('id', id)
}

function CreateNewMovie(title, imageURL, type, year, rating, description, note) {
  return Movies().insert({
    title: title,
    imageURL: imageURL,
    type: type,
    year: year,
    rating: rating,
    description: description,
    note: note,
  })
}

module.exports = {
  getAllMovies: Movies,
  getMovieById: GetMovieById,
  createNewMovie: CreateNewMovie,
}
