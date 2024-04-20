import React from 'react'
import Card from './Card';
import Maincard from './Maincard';
import { BiSolidMessageRoundedError } from "react-icons/bi";
import { FaCircleDot } from "react-icons/fa6";
import Bottom from '../Header/Bottom';
import Link from 'next/link';
// import Page from '../orders/page';
import Page from '../Overview/page';



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

const page = () => {

  return ( 
      <div className='p-10'>
        <div className='flex gap-x-5 p-2'>
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
          {/* <ul className="flex justify-start flex-row gap-x-10 text-sm text-center text-gray-700 overflow-auto max-w-fit font-bold ">
            <li>
              <a href="#page1" className="flex justify-center after:border-b-2 after:absolute after:bottom-[2px] border-transparent hover:text-indigo-600 hover:border-indigo-600 py-4">Overview</a>
            </li>
            <li>
              <a href="#page2" className="flex justify-center border-b-2 border-transparent hover:text-indigo-600 hover:border-indigo-600 py-4">Orders</a>
            </li>
            <li>
              <a href="#page3" className="flex justify-center border-b-2 border-transparent hover:text-indigo-600 hover:border-indigo-600 py-4">Shipments</a>
            </li>
            <li>
              <a href="/NdrDashboard" className="flex justify-center border-b-2 border-transparent hover:text-indigo-600 hover:border-indigo-600 py-4">NDR</a>
            </li>
            <li>
              <a href="#page5" className="flex justify-center border-b-2 border-transparent hover:text-indigo-600 hover:border-indigo-600 py-4 ">WhatsApp Comm</a>
            </li>
            <li>
              <a href="#page5" className="flex justify-center border-b-2 border-transparent hover:text-indigo-600 hover:border-indigo-600 py-4">RTO</a>
            </li>
            <li>
              <a href="#page5" className="flex justify-center border-b-2 border-transparent hover:text-indigo-600 hover:border-indigo-600 py-4">Courier</a>
            </li>
            <li>
              <a href="#page5" className="flex justify-center border-b-2 border-transparent hover:text-indigo-600 hover:border-indigo-600 py-4">Delays</a>
            </li>
          </ul> */}
          
          <div className="flex justify-start flex-row gap-x-10 text-sm text-center text-gray-700 overflow-auto max-w-fit font-bold ">
            {SidebarItems.map(item => (
              //  key={index}
                <Link key={item.path} href={item.path} className="flex justify-center after:border-b-2 after:absolute after:bottom-[2px] border-transparent hover:text-indigo-600 hover:border-indigo-600 py-4">{item.name}</Link>
            ))}
          </div>
          {/* <NdrDashboard/> */}
        </div>

        <hr className="mt-2 border-gray-400" />

        

        {/* <Bottom/>  */}

        {/* <Page/> */}
      </div>
 
  )
}

export default page