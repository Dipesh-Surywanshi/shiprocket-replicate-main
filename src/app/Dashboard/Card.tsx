import React from 'react'
import { LuClipboardList } from "react-icons/lu";
import { RiHandCoinLine } from "react-icons/ri";
import { TfiDropbox } from "react-icons/tfi";

const data = [
    // {
    //     id: 1,
    //     icon: <LuClipboardList className='text-[40px] text-purple-500' />,
    //     title: "Today's Orders",
    //     today_order: "0",
    //     yesterday_order: "Yesterday 0",
    //     bgcolor: "bg-purple-200",
    // },
    // {
    //   id:2,
    //   icon: <RiHandCoinLine className='text-[40px] text-purple-500' />,
    //   title: "Today's Revenue",
    //   today_order: "₹ 0",
    //   yesterday_order: "Yesterday ₹ 0",
    //   bgcolor:"bg-green-200",
    // },
    // {
    //   id:3,
    //   icon: <TfiDropbox className='text-[40px] text-purple-500' />,
    //   title: "Average Shipping",
    //   today_order: "₹ 0",
    //   bgcolor:"bg-slate-700",
    // }
]

const Card = ({ data }: any) => {
    console.log(data.title);
    //  const {icon:Icon} = data;

    return (
        <div className='md:w-[20%]'>
            <div className={`${data?.bgcolor} py-3 h-full flex justify-center items-center md:gap-[20px] gap-[20px] rounded-lg shadow-md
             shadow-slate-400 `}>
                <span className='flex bg-white rounded-[50%] w-[70px] h-[70px] items-center justify-center'>
                    {/* <img className={`${data?.icon}`}/> */}
                    <span className='text-[40px]'>
                        <data.icon />
                    </span>

                </span>
                <div className='font-bold text-black'>
                    <p>{data.title}</p>
                    <p>0</p>
                    <p>Yesterday 0</p>
                </div>
            </div>
        </div>
    )
}

export default Card
