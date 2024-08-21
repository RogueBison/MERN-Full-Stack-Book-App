export default function Footer() {
  return (
    <>
      <footer className="px-16 bg-emerald-700 text-neutral-100 bottom-0 w-full text-xl">
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
    </>
  );
}
