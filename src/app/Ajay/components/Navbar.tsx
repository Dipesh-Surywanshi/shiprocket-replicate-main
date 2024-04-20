import Link from "next/link";

export default function Navbar(){


    const navbarObjects = [
        {
            name : 'Overview',
        },
        {
            name : 'Oredrs',
        },
        {
            name : 'Shipments',
        },
        {
            name : 'NDR',
        },
        {
            name : 'Whatsapp Comm Delays',
        },
        {
            name : 'RTO',
        },
        {
            name : 'Courier',
        },
    ]
    return(
<>
<div className="flex flex-wrap md:flex-row lg:flex-row ">

        {navbarObjects.map(
            (item) => (
               <Link href="#" className="hover:text-purple-600 underline mx-3">{item.name}</Link>
            )
        )}

        
</div>
</>
    );
}