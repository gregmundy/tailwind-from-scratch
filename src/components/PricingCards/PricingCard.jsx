import CheckMark from "./CheckMark";

const PricingCard = ({ storage, tier, price, selected }) => {
  return (
    <div
      className={
        selected
          ? "bg-violet-600 rounded-xl text-white"
          : "bg-slate-700 rounded-xl text-white"
      }
    >
      <div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
        <div className="text-center uppercase">{tier}</div>
        <h2 className="mt-10 font-serif text-5xl text-center">{storage}</h2>
        <h3 className="mt-2 text-center">${price}/momth</h3>
        <div className="flex justify-center">
          <a
            href="./test"
            className={
              selected
                ? "inline-block px-10 py-3 my-6 text-center border border-violet-600 rounded-lg hover:bg-violet-800 hover:border-violet-800 duration-200 bg-violet-600"
                : "inline-block px-10 py-3 my-6 text-center border border-violet-600 rounded-lg hover:bg-violet-800 hover:border-violet-800 duration-200"
            }
          >
            Purchase
          </a>
        </div>
      </div>
      <div className="border-t border-t-slate-700"></div>
      <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
        <div className="flex flex-col space-y-2">
          <CheckMark>{storage} of storage</CheckMark>
          <CheckMark>Option to add members</CheckMark>
          <CheckMark>Extra member benefits</CheckMark>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
