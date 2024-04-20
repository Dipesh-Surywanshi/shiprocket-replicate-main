import { FaFilter } from "react-icons/fa";

export default function Filters() {
    return (
        <>

            {/* <div className="flex flex-wrap mx-5 w-full md:flex-row "> */}

                
                    <div className="relative mt-4 min-w-[150px] md:w-5/12 lg:w-1/12 md:mx-4 md:ml-5 mx-auto">
                        <div className="absolute inset-y-0 end-2 flex items-center ps-3.5 pointer-events-none">
                            <FaFilter className="w-4 h-4 fill-purple-500" />
                        </div>
                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl block w-full ps-10 p-1.5" placeholder="Zone" />
                    </div>


                    <div className="relative mt-4 min-w-[150px] md:w-5/12 lg:w-1/12 md:mx-4 md:ml-12 mx-auto">
                        <div className="absolute inset-y-0 end-2 flex items-center ps-3.5 pointer-events-none">
                            <FaFilter className="w-4 h-4 fill-purple-500" />
                        </div>
                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl block w-full ps-10 p-1.5" placeholder="Courier" />
                    </div>

        
                    <div className="relative mt-4 min-w-[150px] md:w-5/12 lg:w-1/12 md:mx-4 md:ml-5 mx-auto">
                        <div className="absolute inset-y-0 end-2 flex items-center ps-3.5 pointer-events-none">
                            <FaFilter className="w-4 h-4 fill-purple-500" />
                        </div>
                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl block w-full ps-10 p-1.5" placeholder="Zone" />
                    </div>


                    <div className="relative mt-4 min-w-[150px] md:w-5/12 lg:w-1/12 md:mx-4 md:ml-12 mx-auto">
                        <div className="absolute inset-y-0 end-2 flex items-center ps-3.5 pointer-events-none">
                            <FaFilter className="w-4 h-4 fill-purple-500" />
                        </div>
                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl block w-full ps-10 p-1.5" placeholder="Courier" />
                    </div>


            {/* </div> */}

        </>
    );
}