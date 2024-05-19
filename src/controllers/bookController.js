const bookModel = require("../models/bookModel");

module.exports = {
  async createBook(req, res) {
    try {
      await bookModel.createBook(req);
      res.status(200).json({
        message: "Book has been added successfully",
        status: true,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: true, message: "something went wrong" });
    }
  },
  async getAllBooksRequest(req, res) {
    try {
      const bookRequest = await bookModel.getAllBooks();

      return res.status(200).json({ success: true, data: bookRequest });
    } catch (error) {
      res.json({ error: true, message: "something went wrong" });
    }
  },

  async getBookById() {
    const { id } = req.params;
    try {
      const bookRequestById = await bookModel.getBookById(id);
      return res.status(200).json({
        success: true,
        data: bookRequestById,
      });
    } catch (error) {
      res.json({ error: true, message: "something went wrong!" });
    }
  },
  async updateBook(req, res) {
    const { id } = req.params;
    try {
      await bookModel.updateBook(id, req);
      return res.status(200).json({
        success: true,
        message: "Book has been updated",
      });
    } catch (error) {
      res.json({ error: true, message: "something went wrong!" });
    }
  },
  async deleteBook(req, res) {
    const { id } = req.params;
    try {
      await bookModel.deleteBook(id);
      return res
        .status(200)
        .json({ success: true, message: "Book deleted successfully" });
    } catch (error) {
      res.status(500).json({
        error: true,
        message: "Error trying to delete book",
      });
    }
  },
};
