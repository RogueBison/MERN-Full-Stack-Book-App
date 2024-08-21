/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { booksReducer } from "./BooksReducer";

export const BooksContext = createContext();

export const BooksContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(booksReducer, {
    books: null,
  });

  return (
    <BooksContext.Provider value={{ ...state, dispatch }}>
      {children}
    </BooksContext.Provider>
  );
};
