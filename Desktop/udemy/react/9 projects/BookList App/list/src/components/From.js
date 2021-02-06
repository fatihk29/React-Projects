import React from "react";

const Form = (props) => {
  const {
    title,
    setTitle1,
    author,
    setAuthor,
    ISBN,
    setISBN,
    currentBookId,
    handleSubmit,
    cancelEdit,
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <h2>Title</h2>
      </label>
      <input
        autoFocus
        required
        type="text"
        value={title}
        onChange={(e) => {
          setTitle1(e.target.value);
        }}
      />
      <label>
        <h2>Author</h2>
      </label>
      <input
        type="text"
        required
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <label>
        <h2>ISBN</h2>
      </label>
      <input
        required
        type="text"
        value={ISBN}
        onChange={(e) => setISBN(e.target.value)}
      />
      <button tabIndex="0" type="submit">
        {currentBookId !== null ? "Update" : "Add"}
      </button>
      {currentBookId !== null && <button onClick={cancelEdit}>Cancel</button>}
    </form>
  );
};

export default Form;
