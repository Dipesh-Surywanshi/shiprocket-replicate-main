import { IoMdInformationCircleOutline } from "react-icons/io";

export default function TableComponent(){

    const Tableheader=[
        {
            label1 : ""
        },
        {
            label1 : "NDR" ,
            Icon : <IoMdInformationCircleOutline width={30} height={30}/> ,
            label2 : "Shipments",
        },       
        {
            label1 : "1st NDR",
            Icon : <IoMdInformationCircleOutline width={30} height={30}/> ,
            label2 :  "Attempt"
        },
        {
            label1 : "1st NDR",
            Icon : <IoMdInformationCircleOutline width={30} height={30}/>,
            label2 : "Delivered"
        },
        {
            label1 : "2nd NDR",
            Icon : <IoMdInformationCircleOutline width={30} height={30}/>,
            label2 : "Attempt"
        },
        {
            label1 : "2nd NDR",
            Icon :<IoMdInformationCircleOutline width={30} height={30}/>, 
            label2 : "Delivered"
        },
        {
            label1 : "3rd NDR",
            Icon : <IoMdInformationCircleOutline width={30} height={30}/>, 
            label2 : "Attempt"
        },
        {
            label1 : "3rd NDR",
            Icon : <IoMdInformationCircleOutline width={30} height={30}/>, 
            label2 :  "Delivered"
        },
        {
            label1 : "Total",
            Icon : "",
            label2 :  "Delivered"
        },
        {
            label1 : "Total",
            Icon : "",
            label2 :  "RTO"
        },
        {
            label1 : "Lost",
            Icon : "/",
            label2 :   "Damaged"
        },
    ]
    return(
        <>
        <div className="mt-5 mx-10">
        <div className="overflow-auto p-10">
        <table >
  <thead>
    <tr >
        {Tableheader.map(
            (item) => (
                <th className="mt-5 p-3 w-32">{item.label1}{item.Icon} {item.label2}</th>
            )
        )}
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="p-4 text-center">Total NDR Raised</td>
      <td className="p-4 text-center">0</td>
      <td className="p-4 text-center">0</td>
      <td className="p-4 text-center">0</td>
      <td className="p-4 text-center">0</td>
      <td className="p-4 text-center">0</td>
      <td className="p-4 text-center">0</td>
      <td className="p-4 text-center">0</td>
      <td className="p-4 text-center">0</td>
      <td className="p-4 text-center">0</td>
      <td className="p-4 text-center">0</td>
    </tr>

    <tr>
      <td className="p-4 text-center">Seller Response</td>
      <td className="p-4 text-center">0</td>
      <td className="p-4 text-center">0</td>
      <td className="p-4 text-center">0</td>
      <td className="p-4 text-center">0</td>
      <td className="p-4 text-center">0</td>
      <td className="p-4 text-center">0</td>
      <td className="p-4 text-center">0</td>
      <td className="p-4 text-center">0</td>
      <td className="p-4 text-center">0</td>
      <td className="p-4 text-center">0</td>
    </tr>


    <tr>
      <td className="p-4 text-center">Seller Positive Response</td>
      <td className="p-4 text-center">0</td>
      <td className="p-4 text-center">0</td>
      <td className="p-4 text-center">0</td>
      <td className="p-4 text-center">0</td>
      <td className="p-4 text-center">0</td>
      <td className="p-4 text-center">0</td>
      <td className="p-4 text-center">0</td>
      <td className="p-4 text-center">0</td>
      <td className="p-4 text-center">0</td>
      <td className="p-4 text-center">0</td>
    </tr>


    <tr>
      <td className="p-4 text-center">Buyer Response</td>
      <td className="p-4 text-center">0</td>
      <td className="p-4 text-center">0</td>
      <td className="p-4 text-center">0</td>
      <td className="p-4 text-center">0</td>
      <td className="p-4 text-center">0</td>
      <td className="p-4 text-center">0</td>
      <td className="p-4 text-center">0</td>
      <td className="p-4 text-center">0</td>
      <td className="p-4 text-center">0</td>
      <td className="p-4 text-center">0</td>
    </tr>

    <tr>
      <td className="p-4 text-center">Buyer Postive Response</td>
      <td className="p-4 text-center">0</td>
      <td className="p-4 text-center">0</td>
      <td className="p-4 text-center">0</td>
      <td className="p-4 text-center">0</td>
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
        </>
    )
}