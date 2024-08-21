export default function Checkout() {
  return (
    <>
      <form className="my-24 text-emerald-700">
        <div className="flex border-b-2 border-emerald-800 justify-between py-4 px-6">
          <div className="flex justify-start text-xl font-semibold drop-shadow-sm">
            <h3>Item</h3>
          </div>
          <div className="flex justify-end gap-16 text-2xl font-semibold drop-shadow-sm">
            <h3>Qty</h3>
            <h3>Price</h3>
          </div>
        </div>
        <div id="product" className="flex py-4 px-6 items-center gap-14">
          <img
            src="/images/dune.jpg"
            id="botm-image"
            className="rounded-sm w-48"
          />
          <div>
            <h3 className="text-xl font-semibold drop-shadow-sm">
              Jurassic Park
            </h3>
            <p className="mt-4">Michael Crichton</p>
            <p>Horror, Action, Fiction, Fantasy</p>
            <p>31st January 2001</p>

            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              semper enim sed lorem viverra, nec dignissim dolor lobortis.
              Praesent tortor ante, ultricies a posuere vel, finibus sit amet
              eros. Pellentesque quis mi turpis. Morbi id arcu dignissim, semper
              justo in, imperdiet odio.
            </p>
          </div>
          <input
            type="number"
            name="quantity"
            className="h-10 w-12 p-2 rounded-md border border-emerald-700 text-lg drop-shadow-sm font-semibold bg-neutral-100"
          />
          <p className="text-xl drop-shadow-sm font-semibold">£6.99</p>
        </div>
        <div id="product" className="flex py-4 px-6 items-center gap-14">
          <img
            src="/images/dune.jpg"
            id="botm-image"
            className="rounded-sm w-48"
          />
          <div>
            <h3 className="text-xl font-semibold drop-shadow-sm">
              Jurassic Park
            </h3>
            <p className="mt-4">Michael Crichton</p>
            <p>Horror, Action, Fiction, Fantasy</p>
            <p>31st January 2001</p>

            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              semper enim sed lorem viverra, nec dignissim dolor lobortis.
              Praesent tortor ante, ultricies a posuere vel, finibus sit amet
              eros. Pellentesque quis mi turpis. Morbi id arcu dignissim, semper
              justo in, imperdiet odio.
            </p>
          </div>
          <input
            type="number"
            name="quantity"
            className="h-10 w-12 p-2 rounded-md border border-emerald-700 text-lg drop-shadow-sm font-semibold bg-neutral-100"
          />
          <p className="text-xl drop-shadow-sm font-semibold">£6.99</p>
        </div>
        <div className="flex justify-between items-center mt-24">
          <div className="flex justify-start gap-12">
            <button className="uppercase rounded-md py-2 px-8 text-base font-semibold bg-emerald-700 text-neutral-200 hover:shadow-lg hover:bg-emerald-800">
              empty basket
            </button>
            <button className="uppercase rounded-md py-2 px-8  text-base font-semibold bg-emerald-700 text-neutral-200 hover:shadow-lg hover:bg-emerald-800">
              continue shopping
            </button>
          </div>
          <div className="flex justify-end gap-12">
            <button className="uppercase rounded-md py-2 px-8  text-base font-semibold bg-red-500 text-neutral-200 hover:shadow-lg hover:bg-red-700">
              checkout
            </button>
            <p className="flex items-center gap-2">
              Total:{" "}
              <span className="text-xl drop-shadow-sm font-semibold">
                £10.36
              </span>
            </p>
          </div>
        </div>
      </form>
    </>
  );
}
