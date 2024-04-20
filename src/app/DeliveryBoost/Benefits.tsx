import Image from "next/image";

export default function Benefits() {
  const delivery = [
    {
      point:
        "Smart AI backed buyer communication on WhatsApp, IVR, SMS and Manual Call",
    },
    {
      point: "Visibility of buyer responses on failed delivery attempts      ",
    },
    { point: "Detailed re-attempt instructions to courier to ensure delivery" },
    { point: "Call Buyer option on panel for delivery failure cases" },
  ];

  const deliveryobj = [
    { points: "Visibility of delivered and undelivered shipments" },
    { points: "Reattempt request button on panel for failed attempts" },
  ];
  return (
    <div className="bg-zinc-200 rounded-b-md p-4">
      <div className="bg-zinc-100 rounded-lg p-4 flex flex-col md:flex-row items-center ">
        <div className="font-bold text-3xl w-full md:w-1/3 p-2 mx-auto ">
          <h1 className="text-left text-semibold">Delivery Boost</h1>
          <h1 className="text-left">Benefits</h1>
          <div className="justify-center mx-auto p-4">
            <Image
              src={"/delivery-boost.svg"}
              alt="delivery-boost"
              height={300}
              width={350}
            />
          </div>
        </div>
        <div className="w-full md:w-2/3 relative overflow-x-auto">
          <div className="max-w-full overflow-x-auto">
            <table className="text-xs text-left rtl:text-right text-gray-500 ">
              <thead className="rounded-lg shadow-sd border border-zinc-50 text-xs text-gray-500 bg-white ">
                <tr className="justify-between ">
                  <th scope="col" className="px-6 py-3">
                    Benefits
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Without Delivery Boost
                  </th>
                  <th scope="col" className="px-6 py-3">
                    With Delivery Boost
                  </th>
                </tr>
              </thead>
              <div className="p-2"></div>

              <tbody className="bg-white border-zinc-50 border shadow-sm px-4 rounded-lg">
                {deliveryobj.map((item, index) => (
                  <tr
                    className="border-b justify-between w-full text-center"
                    key={index}
                  >
                    <td scope="col" className="px-6 py-3 text-left">
                      {item.points}
                    </td>
                    <td scope="col" className="px-6 py-3">
                      <Image
                        src={"/green-check.svg"}
                        alt="Red Cross"
                        width="15"
                        height="15"
                        className="inline-block align-middle"
                      />
                    </td>
                    <td scope="col" className="px-6 py-3">
                      <Image
                        src={"/green-check.svg"}
                        alt="Green Check"
                        width="15"
                        height="15"
                        className="inline-block align-middle"
                      />
                    </td>
                  </tr>
                ))}
                {delivery.map((item, index) => (
                  <tr
                    className="border-b px-2 justify-between w-full text-center"
                    key={index}
                  >
                    <td scope="col" className="px-6 py-3 text-left">
                      {item.point}
                    </td>
                    <td scope="col" className="px-6 py-3">
                      <Image
                        src={"/red-cross.svg"}
                        alt="Red Cross"
                        width="15"
                        height="15"
                        className="inline-block align-middle"
                      />
                    </td>
                    <td scope="col" className="px-6 py-3">
                      <Image
                        src={"/green-check.svg"}
                        alt="Green Check"
                        width="15"
                        height="15"
                        className="inline-block align-middle"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
