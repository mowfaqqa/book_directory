const knex = require("knex");
const knexfile = require("./knexfile");
const db = knex(knexfile.book_dir);

module.exports = db;
