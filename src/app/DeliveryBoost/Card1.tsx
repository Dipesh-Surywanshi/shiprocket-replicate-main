import Image from "next/image";
export default function Card1() {
  return (
    <>
      <div className="flex flex-col w-full md:w-1/3">
        <div className="bg-white rounded-md p-2 flex justify-between my-1 items-center">
          <div className="flex items-center">
            <Image
              src="/undeliverable.svg"
              alt="undeliverables"
              height={40}
              width={40}
            />
            <p className="text-sm"> Undeliverable Shipments</p>
          </div>
          <p className="text-sm mx-2">0</p>
        </div>

        <div className="bg-[#e5ffe5] rounded-md p-2 flex justify-between my-1 border border-[#34d399]">
          <div className="flex items-center">
            <svg
              height="12"
              width="12"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-2"
            >
              <circle r="6" cx="6" cy="6" fill="#34d399" />
            </svg>
            <p className="text-sm"> Successfully Delivered</p>
          </div>
          <p className="text-sm mx-2">0</p>
        </div>
        <div className="bg-white rounded-md p-2 flex justify-between my-1">
          <div className="flex items-center">
            <svg
              height="12"
              width="12"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-2"
            >
              <circle r="6" cx="6" cy="6" fill="#eab308" />
            </svg>
            <p className="text-sm"> Total RTO Delivery</p>
          </div>
          <p className="text-sm mx-2">0</p>
        </div>
      </div>
    </>
  );
}
