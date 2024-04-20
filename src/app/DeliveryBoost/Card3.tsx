export default function Card3() {
  return (
    <>
      <div className=" w-full md:w-1/3">
        <div className="bg-[#e5ffe5] rounded-md p-2.5 mt-2">
          <div className="text-center text-xs text-gray-500 pb-2">
            <p>
              {" "}
              Sellers with similar products save over ₹1,09,000 every month with
              Delivery Boost{" "}
            </p>
            <p>Join 14 thousand+ sellers generating higher growth</p>
          </div>
          <hr className="text-gray-500" />
          <div className="flex flex-col md:flex-row md:items-center md:justify-between p-3 sm:text-center ">
            <div className="text-gray-500 ">
              <p className="text-sm">
                <span className="line-through"> 7%</span>{" "}
                <span className="text-xl font-bold text-[#34d399]">5% </span>
                of the extra revenue info
              </p>
              <p className="text-xs">*Limited period offer if you join now</p>
            </div>
            <div className="mt-2 md:mt-none">
              <button className="bg-[#34d399] rounded-md py-3 px-9 text-white text-sm font-semibold">
                {" "}
                Join Now
              </button>
            </div>
          </div>
        </div>
        <p className="float-right text-xs text-gray-500 mt-0 ">
          {" "}
          *Displayed numbers are average for sellers shipping similar products{" "}
        </p>
      </div>
    </>
  );
}
