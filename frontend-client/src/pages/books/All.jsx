import { Link } from "react-router-dom";
/* import { useEffect, useState } from "react"; */
import { useEffect } from "react";
import { PiBasketFill } from "react-icons/pi";
import { IconContext } from "react-icons";
import StarRating from "../../components/starRating";
import { useBooksContext } from "../../hooks/useBooksContext";

export default function All() {
  /* const [books, setBooks] = useState(null); */
  const { books, dispatch } = useBooksContext();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:5000/books/all");
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        dispatch({ type: "GET_BOOKS", payload: json });
        /* setBooks(json); */
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchBooks();
  }, [dispatch]);

  return (
    <>
      <div className="grid grid-cols-4 gap-y-16 w-5/6 my-24 text-emerald-800">
        {books &&
          books.map((book) => (
            <Link
              key={book._id}
              to={`/books/single/${book._id}`}
              className="flex flex-col items-center gap-4 w-72 rounded-lg border border-emerald-600 p-6 bg-slate-200 ease-in-out hover:bg-slate-300"
            >
              <div>
                <img
                  src={`http://localhost:5000/uploads/${book.path}`}
                  id="botm-image"
                  className="rounded-sm w-44"
                />
              </div>
              <div>
                <h4 className="text-xl font-bold">{book.title}</h4>
                <p className="text-sm text-emerald-700 mt-2">{book.authors}</p>
                <div
                  id="rating"
                  className="flex gap-2 items-center mt-1 text-red-400 drop-shadow-md"
                >
                  <StarRating rating={book.rating} />
                  <p className="text-sm font-semibold">({book.rating} / 5)</p>
                </div>
                <div id="price" className="mt-4">
                  {book.salePrice !== 0 && (
                    <p className="text-xs line-through text-red-600">
                      £{book.salePrice}
                    </p>
                  )}
                  <p className="text-xl font-semibold drop-shadow-md">
                    £{book.price}
                  </p>
                </div>
                <IconContext.Provider value={{ className: "text-2xl" }}>
                  <button className="flex gap-4 items-center uppercase rounded-md px-8 py-2 mt-4 text-base font-semibold bg-emerald-700 text-neutral-100 hover:shadow-lg hover:bg-emerald-800">
                    Add to Basket <PiBasketFill />
                  </button>
                </IconContext.Provider>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
}
