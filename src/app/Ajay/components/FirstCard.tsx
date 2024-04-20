import Image from "next/image";

export default function FirstCard(){
// export default function NDRtoDeliveryAttempt(){

const items =[
    {
        label : "NDR Reason Split"
    },
    {
        label : "NDR Status"
    },
    
   
]
    return(
        <>
        {   items.map(
            (item) => (
                <>

<div className="bg-white min-w-6/12 md:w-11/12 py-3 m-1 rounded-xl md:h-42 h-42 lg:h-42 w-full ">
          <h1 className="font-bold pl-5">{item.label}</h1>
          <div className="mt-10 w-11/12 ">
            <Image src="/CouriersImg.png" alt="#" width={150} height={150} className="mx-auto"/>
            <h1 className="text-purple-500 text-center font-bold">No NDR Raised for Selected Filters</h1>
          </div>
          </div>
                </>          
                
                ))}

        
     
          </>
    )
} 