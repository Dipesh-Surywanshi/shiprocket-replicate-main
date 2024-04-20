import Link from "next/link";

const SidebarItems = [
    {
      path: "/Overview",
      name: "Overview"
    },
    {
      path: "/Createorder",
      name: "Orders"
    },
    {
      path: "/",
      name: "Shipments"
    },
    {
      path: "/Ajay",
      name: "NDR"
    },
    {
      path: "/Ajay",
      name: "WhatsApp Comm"
    },
    {
      path: "/Ajay",
      name: "RTO"
    },
    {
      path: "/Ajay",
      name: "Courier"
    },
    {
      path: "/Ajay",
      name: "Delays"
    }
  ]
export default function MainPage() {
    return (
        <>

            {/* <div className="flex flex-wrap mt-3 mx-auto">
                <h1 className="text-2xl font-bold mt-2 md:ml-5 lg:ml-5 ml-5 " >Dashboard</h1>
                <div className="ml-5 mt-2 ">
                    <select className="w-32 h-10" >
                        <option value="domestic">Domestic</option>
                        <option value="international">International</option>
                    </select>
                </div>
            </div> */}

            <div className='flex gap-x-5 p-5'>
                <p className='font-extrabold text-black text-xl'>Dashboard</p>
                <div className="group">
                    <button className="bg-white text-gray-700 font-medium py-1.5 px-5 rounded inline-flex items-center">
                        <span className="">Domastic</span>
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                    </button>
                    <ul className="absolute hidden text-gray-700 pt-1 group-hover:block">
                        <li className="">
                            <a className="rounded-t bg-white hover:bg-blue-500 hover:text-white py-2 px-4 block whitespace-no-wrap" href="#">Domastic</a>
                        </li>
                        <li className="">
                            <a className=" bg-white hover:bg-blue-500 hover:text-white py-2 px-4 block whitespace-no-wrap" href="#">International</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="m-2">
               

                <div className="flex justify-start flex-row gap-x-10 text-sm text-center text-gray-700 overflow-auto max-w-fit font-bold mx-5">
                    {SidebarItems.map(item => (
                        <Link key={item.path} href={item.path} className="flex justify-center after:border-b-2 after:absolute after:bottom-[2px] border-transparent hover:text-indigo-600 hover:border-indigo-600 py-4">{item.name}</Link>
                    ))}
                </div>
            </div>

            <hr className="mt-2 mx-5 border-gray-300" />

        </>

    );
}
