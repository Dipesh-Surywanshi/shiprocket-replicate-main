export default function NDRResponse() {


    const items = [
        {
            value: "0",
            label: "Seller Response"
        },
        {
            value: "0",
            label: "Buyer Response"
        },
        {
            value: "0",
            label: "Seller Positive Response"
        },
        {
            value: "0",
            label: "Buyer Positive Response"
        },
        {
            value: "0",
            label: "Seller Positive Response Delivered"
        },
        {
            value: "0",
            label: "Buyer Positive Response Delivered"
        }
    ]
    return (
        <>
            <div className="bg-white min-w-6/12 md:w-11/12  py-3 m-1 rounded-xl w-full">
                <h1 className="font-bold pl-5">NDR Response</h1>
                {/* <div> */}
                <div className="grid grid-cols-2 gap-4 ml-5 mt-8  md:w-46 min-w-46 ">
                    {items.map(
                        (item, index) => (
                            <div className=" mb-3 flex flex-row " key={index} >
                                <div className="border border-b p-2 w-10 bg-gray-50 rounded-lg h-10" >
                                    <p className="text-sm text-center font-bold ">{item.value}</p>
                                </div>
                                <div className="w-7/12  ml-2">
                                    <p className="text-sm ">{item.label}</p>
                                </div>
                            </div>

                        )
                    )}
                </div>
                </div>
            </>
            );
}