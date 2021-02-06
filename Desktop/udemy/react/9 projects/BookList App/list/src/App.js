import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "./components/From";
import Table from "./components/Table";
import "./App.css";

const App = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [ISBN, setISBN] = useState("");
  const [currentBookId, setCurrentBookId] = useState(null);
  const [books, setBooks] = useState([
    {
      bookTitle: title,
      bookAuthor: author,
      bookISBN: ISBN,
      bookId: uuidv4(),
    },
  ]);

  const isInputValid = () => {
    return title.trim() === "" || author.trim() === "" || ISBN.trim() === "";
  };

  const clearInputs = () => {
    setTitle("");
    setAuthor("");
    setISBN("");
  };

  const addBook = () => {
    setBooks([
      ...books,
      {
        bookTitle: title,
        bookAuthor: author,
        bookISBN: ISBN,
        bookId: uuidv4(),
      },
    ]);
  };
  const editBook = (book) => {
    setTitle(book.bookTitle);
    setAuthor(book.bookAuthor);
    setISBN(book.bookISBN);
    setCurrentBookId(book.bookId);
  };

  const updateBook = () => {
    setBooks(
      books.map((book) =>
        book.bookId === currentBookId
          ? { ...books, bookTitle: title, bookAuthor: author, bookISBN: ISBN }
          : book
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearInputs();
    setCurrentBookId(null);

    if (isInputValid()) return;
    !currentBookId ? addBook() : updateBook();
  };

  const removeBook = (id) => {
    console.log(id);
    // console.log(books.filter(id));
    // setBooks(
    //   books.filter((book) => {
    //     book.bookId !== id;
    //   })
    // );
  };

  const cancelEdit = () => {
    clearInputs();
    setCurrentBookId(null);
  };

  return (
    <div className="App">
      <div className="container">
        <Form
          title={title}
          setTitle1={setTitle}
          author={author}
          setAuthor={setAuthor}
          ISBN={ISBN}
          setISBN={setISBN}
          currentBookId={currentBookId}
          handleSubmit={handleSubmit}
          cancelEdit={cancelEdit}
        />
        {console.log(title, author)}
        <Table
          books={books}
          removeBook={removeBook}
          editBook={editBook}
        ></Table>
      </div>
    </div>
  );
};

export default App;
