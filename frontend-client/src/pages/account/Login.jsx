import { Link } from "react-router-dom";
import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  };

  return (
    <>
      <div className="w-4/6 flex flex-col mt-24 gap-8">
        <h2 className="drop-shadow-md text-emerald-700 text-3xl font-bold">
          Login to Existing Account
        </h2>
        <form
          onSubmit={handleSubmit}
          className="pb-12 sm:pb-0 drop-shadow-md w-10/12 lg:w-full lg:max-w-6xl flex flex-col lg:block text-emerald-700"
          id="login-form"
        >
          <div className="mb-6">
            <label className="block mb-4 font-semibold text-xl" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              name="email"
              id="email"
              className="border border-emerald-600 appearance-none rounded w-full bg-slate-200 px-4 py-4 leading-tight font-medium text-xl focus:outline-1 focus:shadow-outline text-black"
            />
          </div>
          <div className="mb-10">
            <label
              className="block mb-4 font-semibold text-xl"
              htmlFor="password"
            >
              Password
            </label>
            <input
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              className="border border-emerald-600 appearance-none rounded w-full bg-slate-200 px-4 py-4 leading-tight font-medium text-xl focus:outline-1 focus:shadow-outline text-black"
            />
          </div>
          <div className="flex justify-between items-center">
            <button
              disabled={isLoading}
              className="flex gap-4 items-center uppercase rounded-md px-14 py-2 text-base font-semibold bg-emerald-700 text-neutral-200 hover:shadow-lg hover:bg-emerald-800"
            >
              Login
            </button>
            <div id="other-links" className="flex gap-4">
              <Link
                to="/account/Signup"
                className="text-emerald-500 hover:text-emerald-600"
              >
                Create Account
              </Link>
              <Link
                to="/NoPage"
                className="text-emerald-500 hover:text-emerald-600 border-l-2 pl-4 border-emerald-600"
              >
                Forgot Password
              </Link>
            </div>
          </div>
          {error && <div>{error}</div>}
        </form>
      </div>
    </>
  );
}
