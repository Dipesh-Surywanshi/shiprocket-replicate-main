export default function NDRFunnel() {


    const head =[ 
        {
            value: "1st",
            label: "NDR"
        },
        {
            value: "2nd",
            label: "NDR"
        },
        {
            value: "3rd",
            label: "NDR"
        }
    ]
    const items = [

        {

            value: "0",
            label: "Total Shipments"
        },
        {
            value: "0",
            label: "Total Shipments"
        },
        {
            value: "0",
            label: "Total Shipments"
        },
        {
            value: "0",
            label: "Pending Shipments"
        },
        {
            value: "0",
            label: "Pending Shipments"
        },
        {
            value: "0",
            label: "Pending Shipments"
        },
        {
            value: "0",
            label: "Delivered Shipments"
        },
        {
            value: "0",
            label: "Delivered Shipments"
        },
        {
            value: "0",
            label: "Delivered Shipments"
        },
        {
            value: "0",
            label: "RTO"
        },
        {
            value: "0",
            label: "RTO"
        },
        {
            value: "0",
            label: "RTO"
        },
        {
            value: "0",
            label: "Lost/Damaged Destroyed"
        },
        {
            value: "0",
            label: "Lost/Damaged Destroyed"
        },
        {
            value: "0",
            label: "Lost/Damaged Destroyed"
        },

    ]
    return (
        <>
              <div className="bg-white min-w-6/12 md:w-11/12 py-3 m-1 rounded-xl md:h-80 h-60 lg:h-42 w-full ">
                <h1 className="font-bold pl-5">NDR Funnel</h1>
                    <div className="grid grid-cols-3 md:gap-5 gap-5  ml-5 mt-3 py-5 w-66 h-44 md:h-60 overflow-auto md:w-11/12 lg:h-46 lg:w-11/12 mr-5">
                    {head.map(
                            (item, index) => (
                                <div className=" mb-3 flex flex-row" key={index} >
                                   
                                        <p className="text-sm font-bold">{item.value} {item.label}</p>
                               
                                </div>

                            )
                        )}

                        <>
                       
                        {items.map(
                            (item, index) => (
                                <div className=" mb-3  flex flex-row" key={index} >
                                    <div className="border border-b p-2 w-10 bg-gray-50 rounded-lg " >
                                        <p className="text-sm text-center font-bold ">{item.value}</p>
                                    </div>
                                    <div className="w/12 ml-2">
                                        <p className="text-sm ">{item.label}</p>
                                    </div>
                                </div>

                            )
                        )}
                         </>
                    </div>
                </div>

        </>
    )
}