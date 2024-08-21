/* const URL = import.meta.env.SERVER.URL; */
import { useEffect, useState } from "react";
import { PiBasketFill } from "react-icons/pi";
import { IconContext } from "react-icons";
import { useParams } from "react-router-dom";
import StarRating from "../../components/starRating";
const url = import.meta.env.VITE_SERVER_URL;

export default function Single() {
  const [book, setBook] = useState(null);
  const params = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`${url}/books/${params.id}`);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        setBook(json);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchBook();
  }, [params.id]);

  return (
    <>
      {book ? (
        <div className="inherit w-full px-24 py-16 rounded-lg flex my-32 gap-12 text-emerald-600 border border-emerald-600 bg-slate-200">
          <img
            src={`${url}/uploads/${book.path}`}
            id="cover-image"
            className="rounded-sm w-64"
          />

          <div className="flex flex-col justify-between">
            <div>
              <div className="flex justify-between">
                <h2 className="text-2xl font-semibold drop-shadow-sm hover:text-red-200">
                  {book.title}
                </h2>
                <div
                  id="rating"
                  className="flex gap-2 items-center mt-1 text-red-400 drop-shadow-md"
                >
                  <StarRating rating={book.rating} />
                  <p className="text-sm font-semibold">({book.rating} / 5)</p>
                </div>
              </div>
              <p className="mt-4">{book.authors}</p>
              <div className="flex gap-2">
                {Array.isArray(book.genres) ? (
                  book.genres.map((genre, index) => (
                    <p key={`${index}`}>{genre}</p>
                  ))
                ) : (
                  <p>{book.genres}</p>
                )}
              </div>
              <p>{book.publication}</p>
              <p id="description" className="mt-4">
                {book.description}
              </p>
            </div>
            <div className="flex justify-between items-center mt-6">
              <div>
                {book.salePrice !== 0 && (
                  <p className="text-xs line-through text-red-600">
                    £{book.salePrice}
                  </p>
                )}
                <p className="text-xl drop-shadow-sm font-semibold">
                  £{book.price}
                </p>
              </div>
              <IconContext.Provider value={{ className: "text-2xl" }}>
                <button className="flex gap-4 items-center uppercase rounded-md px-8 py-2 mt-4 text-base font-semibold bg-emerald-700 text-neutral-100 hover:shadow-lg hover:bg-emerald-800">
                  Add to Basket <PiBasketFill />
                </button>
              </IconContext.Provider>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
