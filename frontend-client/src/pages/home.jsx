import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { PiBasketFill } from "react-icons/pi";
import { IconContext } from "react-icons";
import StarRating from "../components/starRating";
const url = import.meta.env.VITE_SERVER_URL;

export default function Home() {
  const [monthlyBook, setMonthlyBook] = useState();
  const [dealBooks, setDealBooks] = useState();
  const [highRatingBooks, setHighRatingBooks] = useState();
  const [newestBooks, setNewestBooks] = useState();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(`${url}/books/`);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();

        setMonthlyBook(json.botm[0]);
        setDealBooks(json.deals);
        setHighRatingBooks(json.highlyRated);
        setNewestBooks(json.newest);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchBooks();
  }, []);

  return (
    <>
      {/* Book of the Month Component */}
      <div id="botm" className="flex flex-col items-center w-5/6 my-20">
        <h1 className="drop-shadow-md text-emerald-700 text-2xl font-bold">
          Book of the Month
        </h1>
        {monthlyBook ? (
          <div className="bg-red-400 inherit w-full px-28 py-12 rounded-lg flex mt-4 gap-8 text-neutral-100">
            <img
              src={`${url}/uploads/${monthlyBook.path}`}
              id="botm-cover"
              className="rounded-sm w-44"
            />

            <div className="flex flex-col justify-between">
              <div>
                <Link
                  to={`books/single/${monthlyBook._id}`}
                  className="text-2xl font-semibold drop-shadow-lg hover:text-red-200"
                >
                  {monthlyBook.title}
                </Link>
                <div className="flex justify-between">
                  <p className="text-sm font-bold">{monthlyBook.authors}</p>
                  <div
                    id="rating"
                    className="flex gap-2 items-center text-emerald-700 drop-shadow-md"
                  >
                    <StarRating rating={monthlyBook.rating} />
                    <p className="text-sm font-semibold">
                      {monthlyBook.rating}
                    </p>
                  </div>
                </div>
                <p className="mt-4">{monthlyBook.description}</p>
              </div>
              <div className="flex justify-between items-center mt-6">
                <p className="text-xl drop-shadow-md">£{monthlyBook.price}</p>
                <IconContext.Provider value={{ className: "text-2xl" }}>
                  <button className="flex gap-4 items-center uppercase rounded-md px-6 py-2 text-base font-semibold bg-emerald-700 hover:shadow-lg hover:bg-emerald-800">
                    Add to Basket <PiBasketFill />
                  </button>
                </IconContext.Provider>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      {/* Deals Row */}
      <div id="deals" className="flex flex-col w-full mt-24 justify-center">
        <div className="flex justify-center text-emerald-600 items-center">
          <h2 className="drop-shadow-md text-emerald-700 text-2xl font-bold">
            Today&#39;s Deals
          </h2>
          <Link
            to="/books/all"
            className="absolute right-48 text-emerald-500 hover:text-emerald-600"
          >
            View All (9)
          </Link>
        </div>

        <div className="flex w-full mt-12 justify-center text-emerald-800 gap-20">
          {dealBooks ? (
            dealBooks.map((dealBook) => (
              <Link
                key={dealBook._id}
                to={`books/single/${dealBook._id}`}
                className="flex flex-col items-center justify-between gap-4 w-72 rounded-lg border border-emerald-600 py-8 bg-slate-200 ease-in-out hover:bg-slate-300"
              >
                <div className="max-w-48">
                  <img
                    src={`${url}/uploads/${dealBook.path}`}
                    id="deal-cover"
                    className="rounded-sm"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold">{dealBook.title}</h4>
                  <p className="text-sm text-emerald-700 mt-2">
                    {dealBook.authors}
                  </p>
                  <div
                    id="rating"
                    className="flex gap-2 items-center mt-1 text-red-400 drop-shadow-md"
                  >
                    <StarRating rating={dealBook.rating} />
                    <p className="text-sm font-semibold">
                      ({dealBook.rating} / 5)
                    </p>
                  </div>
                  <div id="price" className="mt-4">
                    {dealBook.salePrice !== 0 && (
                      <p className="text-xs line-through text-red-600">
                        £{dealBook.salePrice}
                      </p>
                    )}
                    <p className="text-xl font-semibold drop-shadow-md">
                      £{dealBook.price}
                    </p>
                  </div>
                  <IconContext.Provider value={{ className: "text-2xl" }}>
                    <button className="flex gap-4 items-center uppercase rounded-md px-8 py-2 mt-4 text-base font-semibold bg-emerald-700 text-neutral-100 hover:shadow-lg hover:bg-emerald-800">
                      Add to Basket <PiBasketFill />
                    </button>
                  </IconContext.Provider>
                </div>
              </Link>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>

      {/* Highest Rated Row */}
      <div
        id="high-rating"
        className="flex flex-col w-full mt-24 justify-center"
      >
        <div className="flex justify-center text-emerald-600 items-center">
          <h2 className="drop-shadow-md text-emerald-700 text-2xl font-bold">
            Highest Rated Books
          </h2>
        </div>
        <div className="flex w-full justify-center mt-12 text-emerald-800 gap-20">
          {highRatingBooks ? (
            highRatingBooks.map((highRatingBook) => (
              <Link
                key={highRatingBook._id}
                to={`books/single/${highRatingBook._id}`}
                className="flex flex-col items-center justify-between gap-4 w-72 rounded-lg border border-emerald-600 py-8 bg-slate-200 ease-in-out hover:bg-slate-300"
              >
                <div className="max-w-48">
                  <img
                    src={`${url}/uploads/${highRatingBook.path}`}
                    id="high-rating-cover"
                    className="rounded-sm"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold">{highRatingBook.title}</h4>
                  <p className="text-sm text-emerald-700 mt-2">
                    {highRatingBook.authors}
                  </p>
                  <div
                    id="rating"
                    className="flex gap-2 items-center mt-1 text-red-400 drop-shadow-md"
                  >
                    <StarRating rating={highRatingBook.rating} />
                    <p className="text-sm font-semibold">
                      ({highRatingBook.rating} / 5)
                    </p>
                  </div>
                  <div id="price" className="mt-4">
                    {highRatingBook.salePrice !== 0 && (
                      <p className="text-xs line-through text-red-600">
                        £{highRatingBook.salePrice}
                      </p>
                    )}
                    <p className="text-xl font-semibold drop-shadow-md">
                      £{highRatingBook.price}
                    </p>
                  </div>
                  <IconContext.Provider value={{ className: "text-2xl" }}>
                    <button className="flex gap-4 items-center uppercase rounded-md px-8 py-2 mt-4 text-base font-semibold bg-emerald-700 text-neutral-100 hover:shadow-lg hover:bg-emerald-800">
                      Add to Basket <PiBasketFill />
                    </button>
                  </IconContext.Provider>
                </div>
              </Link>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>

      {/* New Books Row */}
      <div
        id="new-arrivals"
        className="flex flex-col w-full mt-24 justify-center mb-28"
      >
        <div className="flex justify-center text-emerald-600 items-center">
          <h2 className="drop-shadow-md text-emerald-700 text-2xl font-bold">
            New Arrivals
          </h2>
        </div>
        <div className="flex w-full mt-12 justify-center text-emerald-800 gap-20">
          {newestBooks ? (
            newestBooks.map((newestBook) => (
              <Link
                key={newestBook._id}
                to={`books/single/${newestBook._id}`}
                className="flex flex-col items-center justify-between gap-4 w-72 rounded-lg border border-emerald-600 py-8 bg-slate-200 ease-in-out hover:bg-slate-300"
              >
                <div className="max-w-48">
                  <img
                    src={`${url}/uploads/${newestBook.path}`}
                    id="newest-cover"
                    className="rounded-sm"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold">{newestBook.title}</h4>
                  <p className="text-sm text-emerald-700 mt-2">
                    {newestBook.authors}
                  </p>
                  <div
                    id="rating"
                    className="flex gap-2 items-center mt-1 text-red-400 drop-shadow-md"
                  >
                    <StarRating rating={newestBook.rating} />
                    <p className="text-sm font-semibold">
                      ({newestBook.rating} / 5)
                    </p>
                  </div>
                  <div id="price" className="mt-4">
                    {newestBook.salePrice !== 0 && (
                      <p className="text-xs line-through text-red-600">
                        £{newestBook.salePrice}
                      </p>
                    )}
                    <p className="text-xl font-semibold drop-shadow-md">
                      £{newestBook.price}
                    </p>
                  </div>
                  <IconContext.Provider value={{ className: "text-2xl" }}>
                    <button className="flex gap-4 items-center uppercase rounded-md px-8 py-2 mt-4 text-base font-semibold bg-emerald-700 text-neutral-100 hover:shadow-lg hover:bg-emerald-800">
                      Add to Basket <PiBasketFill />
                    </button>
                  </IconContext.Provider>
                </div>
              </Link>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
}
