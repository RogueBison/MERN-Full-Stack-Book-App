import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBooksContext } from "../../hooks/useBooksContext";
import { useAuthContext } from "../../hooks/useAuthContext";
const url = import.meta.env.VITE_SERVER_URL;

export default function NewProdForm() {
  const navigate = useNavigate();
  const { dispatch } = useBooksContext();
  const { user } = useAuthContext();
  const [error, setError] = useState(null);

  const [preview, setPreview] = useState("/images/placeholder.jpg");
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState("");
  const [price, setPrice] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [publication, setPublication] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("You must be signed in to do that");
      return;
    }

    const formData = new FormData();
    formData.append("book_cover", image);
    formData.append("title", title);
    formData.append("authors", author);
    formData.append("rating", rating);
    formData.append("price", price);
    formData.append("salePrice", salePrice);
    formData.append("publication", publication);
    formData.append("genres", genre);
    formData.append("description", description);

    const response = await fetch(`${url}/admin/create`, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setError(null);

      setImage(null);
      setTitle("");
      setAuthor("");
      setRating("");
      setPrice("");
      setSalePrice("");
      setPublication("");
      setGenre("");
      setDescription("");

      dispatch({ type: "CREATE_BOOK", payload: json });
      navigate("/admin/AdminDashboard");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    } else {
      setImage(null);
      setPreview("/images/placeholder.jpg");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      encType="multipart/form-data"
      className="flex justify-center items-center w-full rounded-lg my-32 gap-8 text-emerald-600"
    >
      <div>
        <img
          src={preview}
          alt="placeholder cover or selected cover file"
          className="rounded-sm w-64 mb-4"
        />
        <div className="flex flex-col gap-4">
          <input
            type="file"
            name="book_cover"
            id="book_cover"
            onChange={handleFileChange}
            className="uppercase rounded-md py-2 text-base font-semibold bg-emerald-700 text-neutral-200 hover:shadow-lg hover:bg-emerald-800"
            accept="image/png, image/jpeg"
          />
          {/* <button
            disabled={isDisabled}
            onChange={(e) => setImage(e.target.value)}
            className="uppercase rounded-md py-2 text-base font-semibold bg-emerald-700 text-neutral-200 hover:shadow-lg hover:bg-emerald-800"
          >
            upload image
          </button> */}
          <button className="uppercase rounded-md  py-2 text-base font-semibold bg-emerald-700 text-neutral-200 hover:shadow-lg hover:bg-emerald-800 float-right">
            create
          </button>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-3 gap-x-8 gap-y-4 mb-4">
          <div>
            <label className="block mb-4 font-semibold text-xl" htmlFor="name">
              Book Title
            </label>
            <input
              type="text"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              className="border border-emerald-600 appearance-none rounded w-full bg-slate-200 px-4 py-4 leading-tight font-medium text-xl focus:outline-1 focus:shadow-outline text-black"
            />
          </div>
          <div>
            <label className="block mb-4 font-semibold text-xl" htmlFor="name">
              Book Author
            </label>
            <input
              type="text"
              name="authors"
              onChange={(e) => setAuthor(e.target.value)}
              value={author}
              className="border border-emerald-600 appearance-none rounded w-full bg-slate-200 px-4 py-4 leading-tight font-medium text-xl focus:outline-1 focus:shadow-outline text-black"
            />
          </div>
          <div>
            <label className="block mb-4 font-semibold text-xl" htmlFor="name">
              Rating
            </label>
            <input
              type="text"
              name="rating"
              onChange={(e) => setRating(e.target.value)}
              value={rating}
              className="border border-emerald-600 appearance-none rounded w-full bg-slate-200 px-4 py-4 leading-tight font-medium text-xl focus:outline-1 focus:shadow-outline text-black"
            />
          </div>
          <div>
            <label className="block mb-4 font-semibold text-xl" htmlFor="name">
              Price
            </label>
            <input
              type="text"
              name="price"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              className="border border-emerald-600 appearance-none rounded w-full bg-slate-200 px-4 py-4 leading-tight font-medium text-xl focus:outline-1 focus:shadow-outline text-black"
            />
          </div>
          <div>
            <label className="block mb-4 font-semibold text-xl" htmlFor="name">
              Sale Price
            </label>
            <input
              type="text"
              name="salePrice"
              onChange={(e) => setSalePrice(e.target.value)}
              value={salePrice}
              className="border border-emerald-600 appearance-none rounded w-full bg-slate-200 px-4 py-4 leading-tight font-medium text-xl focus:outline-1 focus:shadow-outline text-black"
            />
          </div>
          <div>
            <label className="block mb-4 font-semibold text-xl" htmlFor="name">
              Publication Date
            </label>
            <input
              type="text"
              name="publication"
              onChange={(e) => setPublication(e.target.value)}
              value={publication}
              className="border border-emerald-600 appearance-none rounded w-full bg-slate-200 px-4 py-4 leading-tight font-medium text-xl focus:outline-1 focus:shadow-outline text-black"
            />
          </div>
          <div>
            <label className="block mb-4 font-semibold text-xl" htmlFor="name">
              Genre
            </label>
            <input
              type="text"
              name="genres"
              onChange={(e) => setGenre(e.target.value)}
              value={genre}
              className="border border-emerald-600 appearance-none rounded w-full bg-slate-200 px-4 py-4 leading-tight font-medium text-xl focus:outline-1 focus:shadow-outline text-black"
            />
          </div>
        </div>
        <label className="block mb-4 font-semibold text-xl" htmlFor="name">
          Book Description
        </label>
        <textarea
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="border border-emerald-600 appearance-none rounded w-full bg-slate-200 px-2 py-2 h-60 leading-tight font-medium text-xl focus:outline-1 focus:shadow-outline text-black"
        />
      </div>
      {error && <div>{error}</div>}
    </form>
  );
}
