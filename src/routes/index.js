const express = require("express");

const bookController = require("../controllers/bookController");
const router = express.Router();

router.post("/book", bookController.createBook);
router.get("/book", bookController.getAllBooksRequest);
router.get("/book/:id", bookController.getBookById);
router.put("/book/:id", bookController.updateBook);
router.delete("/book/:id", bookController.deleteBook);

module.exports = router;
