export default function Card(){



    return (
        <>
     <div className="overflow-y-hidden md:overflow-x-auto flex flex-row md:flex-row">
<div className="border-solid border-2 border-gray-300 rounded-md min-w-[260px] mx-4 lg:mx-9 min-h-[120px] mb-5">
   <p className="text-center py-2 px-6">NDR Raised</p>
    <div className="text-center bg-gray-100 h-fit py-6 px-5">
    <p className="text-xl font-bold ">0</p>
    </div>

</div>

<div className="border-solid border-2 border-gray-300 rounded-md min-w-[260px] mx-4 lg:mx-9 min-h-[120px] mb-5">
   <p className="text-center py-2 px-6">NDR Raised Percentage</p>
    <div className="text-center bg-gray-100 py-6 px-5">
    <p className="text-xl font-bold ">0%</p>
    </div>

</div>

<div className="border-solid border-2 border-gray-300 rounded-md min-w-[260px] mx-4 lg:mx-9 min-h-[120px] mb-5">
   <p className="text-center py-2 px-6">Action Required</p>
    <div className="text-center bg-gray-100 h-fit py-6 px-5">
    <p className="text-xl font-bold ">0</p>
    </div>

</div>


<div className="border-solid border-2 border-gray-300 rounded-md min-w-[260px] mx-4 lg:mx-9 min-h-[120px] mb-5">
   
  
   <p className="text-center py-2 px-6">Delivered</p>
    <div className="text-center bg-gray-100 h-fit py-6 px-5">
    <p className="text-xl font-bold ">0</p>
    </div>

</div>


<div className="border-solid border-2 border-gray-300 rounded-md min-w-[260px] mx-4 lg:mx-9 min-h-[120px] mb-5">
   
  
   <p className="text-center py-2 px-6">Post NDR</p>
    <div className="text-center bg-gray-100 h-fit py-6 px-5">
    <p className="text-xl font-bold ">0</p>
    </div>

</div>
      
</div>

</>
    )
}