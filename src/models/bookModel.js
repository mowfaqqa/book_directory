const knexConfig = require("./connection/knex");
const db = knexConfig.createConnection("book_dir");

module.exports = {
  //  fetch all books
  async getAllBooks() {
    const booksRequest = await db
      .select("*")
      .from("books")
      .orderBy("created_at", "desc")
      .then((rows) => rows);

    return booksRequest;
  },

  // get single book
  async getBookById(bookId) {
    const singleBook = await db
      .from("books")
      .select("*")
      .where("id", bookId)
      .first();

    return singleBook;
  },

  // create book
  async createBook(req, res) {
    const currentDate = new Date();
    const tableData = {
      title: req.body.title,
      author: req.body.author,
      year: req.body.year,
      genre: req.body.genre,
      created_at: currentDate,
      updated_at: currentDate,
    };
    const bookRequest = await db
      .table("books")
      .insert(tableData)
      .returning("id");

    return bookRequest[0];
  },

  async updateBook(bookId, req) {
    const updatedData = {
      ...req.body,
      updated_at: new Date(),
    };

    const updatedBookRequest = db
      .table("books")
      .where("id", bookId)
      .update(updatedData);

    return updatedBookRequest;
  },

  async deleteBook(bookId) {
    await db.table("books").where("id", bookId).delete();
    return true;
  },
};
