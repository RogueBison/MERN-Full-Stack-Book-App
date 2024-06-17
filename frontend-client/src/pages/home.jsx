function Home() {
  return (
    <>
      <div id="page-container" className="bg-neutral-200 min-h-screen text-lg">
        <nav className="top-0 sticky z-10">
          <div
            id="header"
            className="px-20 py-4 flex justify-between items-center bg-emerald-700 text-neutral-100"
          >
            <div id="logo" className="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="#f87171"
              >
                <path d="M20 16.78c.002-1.8.003-2.812 0-4.027-.001-.417.284-.638.567-.638.246 0 .49.168.538.52.19 1.412.411 2.816.547 3.146.042.099.113.141.185.141.123 0 .244-.123.206-.284-.255-1.069-.493-2.519-.607-3.334 1.904 1.854 2.314 2.005 2.192 3.548-.089 1.129-.52 2.508.373 4.255l-2.563.893c-.062-.314-.138-.637-.226-.933-.515-1.721-1.214-1.752-1.212-3.287zm-16.567-4.665c-.246 0-.49.168-.538.52-.19 1.412-.411 2.816-.547 3.146-.042.099-.113.141-.185.141-.123 0-.244-.123-.206-.284.255-1.069.493-2.519.607-3.334-1.904 1.854-2.314 2.005-2.192 3.548.09 1.128.521 2.507-.372 4.254l2.562.894c.062-.314.138-.637.226-.933.515-1.721 1.214-1.752 1.212-3.287-.002-1.8-.003-2.812 0-4.027.001-.418-.285-.638-.567-.638zm1.567.642zm14.001 2.637c-2.354.194-4.35.62-6.001 1.245v-9.876l.057-.036c1.311-.816 3.343-1.361 5.943-1.603v7.633c-.002-.459.165-.881.469-1.186.377-.378.947-.562 1.531-.391v-8.18c-3.438.105-6.796.658-9 2.03-2.204-1.372-5.562-1.925-9-2.03v8.18c.583-.17 1.153.012 1.531.391.304.305.471.726.469 1.184v-7.631c2.6.242 4.632.788 5.943 1.604l.057.035v9.876c-1.651-.626-3.645-1.052-6-1.246v1.385c0 .234-.021.431-.046.622 2.249.193 4.372.615 6.046 1.381.638.292 1.362.291 2 0 1.675-.766 3.798-1.188 6.046-1.381-.025-.191-.046-.386-.046-.621l.001-1.385zm-12.001-2.426c1.088.299 2.122.64 3 .968v1.064c-.823-.345-1.879-.705-3-1.015v-1.017zm0-1.014c1.121.31 2.177.67 3 1.015v-1.064c-.878-.328-1.912-.669-3-.968v1.017zm0-5.09v1.017c1.121.311 2.177.67 3 1.015v-1.064c-.878-.328-1.912-.669-3-.968zm0 3.058c1.121.31 2.177.67 3 1.015v-1.063c-.878-.328-1.912-.669-3-.968v1.016zm10 4.063c-1.121.31-2.177.67-3 1.015v-1.064c.878-.328 1.912-.669 3-.968v1.017zm0-3.048c-1.088.299-2.122.64-3 .968v1.064c.823-.345 1.879-.705 3-1.015v-1.017zm-3-3.105v1.064c.823-.345 1.879-.705 3-1.015v-1.017c-1.088.299-2.122.64-3 .968zm3 1.074c-1.088.299-2.122.64-3 .968v1.064c.823-.345 1.879-.705 3-1.015v-1.017z" />
              </svg>
              <h1 className="tracking-wide text-xl">
                <span className="text-red-400">T</span>he{" "}
                <span className="text-red-400">O</span>nline{" "}
                <span className="text-red-400">B</span>ookstore
              </h1>
            </div>
            <input
              type="search"
              placeholder="Search books by title or author(s)..."
              className="flex justify-center items-center p-2 rounded-full text-sm bg-neutral-300 text-gray-500 w-1/3 shadow-inner"
            ></input>
            <ul className="flex items-center gap-6 relative">
              <li>
                <a href="/login">Login</a>
              </li>
              <li>
                <a href="shopping-basket">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#fecaca"
                  >
                    <path d="M16 6v-2c0-2.209-1.791-4-4-4s-4 1.791-4 4v2h-5v18h18v-18h-5zm-7-2c0-1.654 1.346-3 3-3s3 1.346 3 3v2h-6v-2zm10 18h-14v-14h3v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h3v14z" />
                  </svg>
                </a>
              </li>
              <div className="flex justify-center items-center py-1 px-2 -top-2 -right-4 h-6 absolute text-sm bg-red-500 rounded-full">
                2
              </div>
            </ul>
          </div>
          <div
            id="sub-header"
            className="flex justify-center items-center p-4 bg-emerald-900 text-lg text-neutral-100"
          >
            <ul className="flex gap-8 drop-shadow-lg">
              <li>
                <a href="">Book of the month</a>
              </li>
              <li>
                <a href="">Deals</a>
              </li>
              <li>
                <a href="">Highest Rated</a>
              </li>
              <li>
                <a href="">What&apos;s New</a>
              </li>
            </ul>
          </div>
        </nav>
        <main className="container mx-auto flex flex-col items-center min-h-screen">
          <div id="botm" className="flex flex-col items-center w-2/3 my-12">
            <h1 className="drop-shadow-md text-emerald-700 text-2xl font-bold">
              Book of the Month
            </h1>
            <div className="bg-red-400 inherit w-full px-20 py-12 rounded-lg flex mt-4 gap-8 text-neutral-100">
              <img
                src="/images/dune.jpg"
                id="botm-image"
                className="rounded-sm w-44"
              />

              <div>
                <h3>Dune (1965)</h3>
                <div className="flex justify-between">
                  <p>Frank Herbert</p>
                  <div id="rating" className="flex gap-2 items-center">
                    <svg
                      clipRule="evenodd"
                      fillRule="evenodd"
                      strokeLinejoin="round"
                      strokeMiterlimit="2"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#047857"
                    >
                      <path
                        d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z"
                        fillRule="nonzero"
                      />
                    </svg>
                    <svg
                      clipRule="evenodd"
                      fillRule="evenodd"
                      strokeLinejoin="round"
                      strokeMiterlimit="2"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#047857"
                    >
                      <path
                        d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z"
                        fillRule="nonzero"
                      />
                    </svg>
                    <svg
                      clipRule="evenodd"
                      fillRule="evenodd"
                      strokeLinejoin="round"
                      strokeMiterlimit="2"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#047857"
                    >
                      <path
                        d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z"
                        fillRule="nonzero"
                      />
                    </svg>
                  </div>
                </div>
                <p className="mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus semper enim sed lorem viverra, nec dignissim dolor
                  lobortis. Praesent tortor ante, ultricies a posuere vel,
                  finibus sit amet eros. Pellentesque quis mi turpis. Morbi id
                  arcu dignissim, semper justo in, imperdiet odio.
                </p>
                <div className="flex justify-between items-center mt-6">
                  <p>£6.99</p>
                  <button className="flex gap-4 items-center uppercase rounded-md px-6 py-2 text-base bg-emerald-700">
                    Add to Basket{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#f5f5f5"
                    >
                      <path d="M16 6v-2c0-2.209-1.791-4-4-4s-4 1.791-4 4v2h-5v18h18v-18h-5zm-7-2c0-1.654 1.346-3 3-3s3 1.346 3 3v2h-6v-2zm10 18h-14v-14h3v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h3v14z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="px-16 bg-emerald-700 text-neutral-100  bottom-0 w-full text-xl">
          <div className="flex py-4 justify-center items-center">
            <h1 className="tracking-wide">
              <span className="text-red-400">T</span>he{" "}
              <span className="text-red-400">O</span>nline{" "}
              <span className="text-red-400">B</span>ookstore
            </h1>
          </div>
          <div className="py-4 text-lg flex justify-between">
            <h4>
              Created by <strong>Martin Alexander</strong>
            </h4>
            <ul className="flex gap-8 items-center">
              <li>
                <a href="">Terms of Use</a>
              </li>
              <li>
                <a href="">Privacy Notice</a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Home;
