import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useBooksContext } from "../../hooks/useBooksContext";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function AdminDashboard() {
  const { books, dispatch } = useBooksContext();
  const { user } = useAuthContext();
  const [checkedBooks, setCheckedBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:5000/books/all");
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();

        dispatch({ type: "GET_BOOKS", payload: json });
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchBooks();
  }, [dispatch]);

  const handleCheck = (e) => {
    const checked = e.target.value;

    setCheckedBooks((prevCheckedBooks) =>
      e.target.checked
        ? [...prevCheckedBooks, checked]
        : prevCheckedBooks.filter((id) => id !== checked)
    );
  };

  const handleClick = async () => {
    checkedBooks.forEach(async (checked) => {
      await deleteBook(checked);
      setCheckedBooks([]);
    });
  };

  const deleteBook = async (id) => {
    if (!user) {
      return;
    }
    try {
      const response = await fetch(`http://localhost:5000/admin/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      dispatch({ type: "DELETE_BOOK", payload: { id } });
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <div className="w-full my-32 text-emerald-700">
        <div className="flex justify-between w-full mb-8">
          <div className="flex gap-2">
            <p className="text-lg">Books Selected:</p>
            <p className="text-emerald-800 font-semibold text-lg">
              {checkedBooks.length}
            </p>
          </div>
          <div className="flex gap-12">
            <Link
              to="/admin/newProdForm"
              className="uppercase rounded-md px-8 py-2 text-base font-semibold bg-emerald-700 text-neutral-200 hover:shadow-lg hover:bg-emerald-800"
            >
              create new
            </Link>
            <button
              onClick={handleClick}
              className="uppercase rounded-md px-8 py-2 text-base font-semibold bg-red-500 text-neutral-200 hover:shadow-lg hover:bg-red-700"
            >
              delete
            </button>
          </div>
        </div>
        <table className="table-auto w-full">
          <thead className="text-emerald-800 border-b border-emerald-600 py-4 px-4">
            <tr>
              <th scope="col" className="px-6 py-6"></th>
              <th scope="col">id</th>
              <th scope="col">Title</th>
              <th scope="col">Author(s)</th>
              <th scope="col">Price</th>
              <th scope="col">Book of the Month?</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {books &&
              books.map((book) => (
                <tr
                  key={book._id}
                  className="border-b border-emerald-600 odd:bg-slate-200 even:bg-neutral-200"
                >
                  <td className="w-40 text-center pt-2">
                    <input
                      type="checkbox"
                      id={book._id}
                      name="book-check"
                      onChange={handleCheck}
                      value={book._id}
                      className="w-6 h-6 bg-neutral-100 rounded-lg"
                    />
                  </td>
                  <td className="p-2 w-40">{book._id}</td>
                  <td className="w-40 text-center">{book.title}</td>
                  <td className="w-40 text-center">{book.authors}</td>
                  <td className="w-40 text-center">£{book.price}</td>
                  <td className="w-40 text-center pt-2">
                    <select
                      id="botm"
                      name="botm"
                      className="bg-neutral-100 rounded-lg p-2 w-40"
                    >
                      <option value="true">True</option>
                      <option value="false">False</option>
                    </select>
                  </td>
                  <td className="p-2 w-40">
                    <Link
                      to={`/admin/EditProdForm/${book._id}`}
                      className="uppercase rounded-md px-4 py-2 text-base font-semibold bg-emerald-700 text-neutral-200 hover:shadow-lg hover:bg-emerald-800"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
