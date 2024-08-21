export const booksReducer = (state, action) => {
  switch (action.type) {
    case "GET_BOOKS":
      return {
        books: action.payload,
      };
    case "CREATE_BOOK":
      return {
        books: [action.payload, ...state.books],
      };
    case "DELETE_BOOK":
      return {
        books: state.books.filter((book) => book._id !== action.payload.id),
      };
    case "EDIT_BOOK":
      return {
        books: state.books.map((book) => {
          if (book._id === action.payload.id) {
            return { ...book, ...action.payload.editedBook };
          } else {
            return book;
          }
        }),
      };
    default:
      return state;
  }
};
