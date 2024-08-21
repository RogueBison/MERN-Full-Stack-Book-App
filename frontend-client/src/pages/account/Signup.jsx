import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(username, email, password);
  };

  return (
    <>
      <div className="w-4/6 flex flex-col mt-24 gap-8">
        <h2 className="drop-shadow-md text-emerald-700 text-3xl font-bold">
          Create an Account
        </h2>
        <form
          onSubmit={handleSubmit}
          className="pb-12 sm:pb-0 drop-shadow-md w-10/12 lg:w-full lg:max-w-6xl flex flex-col lg:block text-emerald-700"
          id="signup-form"
        >
          <div className="mb-6">
            <label className="block mb-4 font-semibold text-xl" htmlFor="name">
              Username
            </label>
            <input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              name="username"
              className="border border-emerald-600 appearance-none rounded w-full bg-slate-200 px-4 py-4 leading-tight font-medium text-xl focus:outline-1 focus:shadow-outline text-black"
            />
          </div>
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
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              name="password"
              id="password"
              className="border border-emerald-600 appearance-none rounded w-full bg-slate-200 px-4 py-4 leading-tight font-medium text-xl focus:outline-1 focus:shadow-outline text-black"
            />
          </div>
          <button
            disabled={isLoading}
            className="flex gap-4 items-center uppercase rounded-md px-14 py-2 text-base font-semibold bg-emerald-700 text-neutral-200 hover:shadow-lg hover:bg-emerald-800"
          >
            Signup
          </button>
          {error && <div>{error}</div>}
        </form>
      </div>
    </>
  );
}
