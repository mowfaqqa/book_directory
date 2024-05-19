const express = require("express")
const router = express.Router()


const bookController = require("../controllers/bookController");

router.post("/book", bookController.createBook)
router.get("/book", bookController.getAllBooksRequest)
router.get("/book/:id", bookController.getBookById)
router.put("/book/:id", bookController.updateBook)
router.delete("/book/:id", bookController.deleteBook)



