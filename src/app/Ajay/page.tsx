import Image from "next/image";
import MainPage from "./components/MainPage";
import Navbar from "./components/Navbar";
import Calender from "./components/Calender";
import Filters from "./components/Filters";
import Card from "./components/Card";
import NDRResponse from "./components/NDRResponse";
import NDRFunnel from "./components/NDRFunnel";
import TableComponent from "./components/TableComponent";
import SecondeCard from "./components/SecondeCard";
import SuccessbyCourier from "./components/SuccessbyCourier";
import NDRReason from "./components/NDRReason";
import FirstCard from "./components/FirstCard";


export default function Home() {
  return (

    <div className="relative bg-white">
      <div className="relative bg-gray-200 mx-1 rounded-md ">

          <div className=" w-full mx-5">
        <div className="">

            <div className="">
              <MainPage />
            </div>

            {/* <div className="ml-5 mt-5">
              <Navbar />
            </div> */}

            <hr className="border-3 bg-black ml-5 mr-5 mt-2" />



          </div>
          <div className="main-cal">
            <div className="flex flex-wrap">
              <Calender />
              <Filters />
            </div>
          </div>
        </div>

        <div className="bg-white mx-5 md:m-8 p-5 mt-5 rounded-xl flex flex-row">
          <Card />
        </div>


        <div className="mt-5 mx-5">
          <div className="flex md:flex-row lg:flex-row flex-col">
            <NDRResponse />
            <NDRFunnel />
          </div>
        </div>



        <div className="mx-5 mt-5">
          <div className="flex md:flex-row lg:flex-row flex-col">
            <FirstCard />
          </div>
        </div>




        <div className="bg-white mx-5 mt-5 rounded-xl ">
          {/* <Card /> */}
          <TableComponent />
        </div>


        <div className="mx-5 mt-5">
          <div className="flex md:flex-row lg:flex-row flex-col">
            <SecondeCard />
          </div>
        </div>



        <div className="mx-5 mt-5 pb-5">
          <div className="flex md:flex-row lg:flex-row flex-col">
            <SuccessbyCourier />
            <NDRReason />
          </div>
        </div>

      </div>
    </div>







  );
}