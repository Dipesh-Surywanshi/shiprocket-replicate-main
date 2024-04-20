import { IoMdInformationCircleOutline } from "react-icons/io";

export default function SuccessbyCourier(){

    const Tableheader=[
        {
            label1 : ""
        },
        {
            label1 : "Total" ,
        },       
        {
            label1 : " Zone A",
        },
        {
            label1 : "Zone B",
        },
        {
            label1 : "Zone C",
        },
        {
            label1 : "Zone D",
        },
        {
            label1 : "Zone E",
        },
        
    ]
    return(
        <>
        <div className="bg-white min-w-6/12 md:w-11/12 py-3 m-1 rounded-xl md:h-42 h-42 lg:h-42 w-full ">
        <h1 className="font-bold pl-5">Success by Courier</h1>
        <div className="mt-5 mx-10">
        <div className="overflow-auto p-5">
        <table >
  <thead>
    <tr >
        {Tableheader.map(
            (item) => (
                <th className="mt-5 py-4 w-32 text-sm"><p>{item.label1}</p></th>
            )
        )}
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="py-4 text-center">NDR Raised</td>
      <td className="p-4 text-center">0</td>
      <td className="p-4 text-center">0</td>
      <td className="p-4 text-center">0</td>
      <td className="p-4 text-center">0</td>
      <td className="p-4 text-center">0</td>
      <td className="p-4 text-center">0</td>
    </tr>

    <tr>
      <td className="py-4 text-center">NDR Delivered</td>
      <td className="p-4 text-center">0</td>
      <td className="p-4 text-center">0</td>
      <td className="p-4 text-center">0</td>
      <td className="p-4 text-center">0</td>
      <td className="p-4 text-center">0</td>
      <td className="p-4 text-center">0</td>
    </tr>


 
  
  </tbody>
</table>
</div>
</div>
</div>
        </>
    )
}