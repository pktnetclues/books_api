const { QueryTypes } = require("sequelize");
const sequelize = require("../../utils/connection");

const getBooks = async (req, res) => {
  try {
    const totalBooks = await sequelize.query(
      `SELECT count(*) as totalbooks FROM books`,
      {
        type: QueryTypes.SELECT,
      }
    );
    const booksLength = totalBooks[0].totalbooks;

    const page = parseInt(req.query.page);
    const pageSize = parseInt(req.query.pageSize);

    // Calculate the start index for the requested page
    const startIndex = (page - 1) * pageSize;

    // Fetching all the books with pagination
    const booksResult = await sequelize.query(
      `SELECT DISTINCT b.book_id, b.title, b.description, b.published_year, bg.genre_id 
       FROM books b 
       LEFT JOIN book_genres bg ON b.book_id = bg.book_id
       LIMIT ${pageSize} OFFSET ${startIndex}
       `,
      {
        type: QueryTypes.SELECT,
      }
    );

    // Calculate the total number of pages
    const totalPages = Math.ceil(booksLength / pageSize);

    return res
      .status(200)
      .json({ message: "success", books: booksResult, totalPages });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getBooks;
