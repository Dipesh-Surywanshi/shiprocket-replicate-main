import Image from "next/image";
import DeliveryOverview from "../DeliveryBoost/DeliveryOverview";
import Action from "../DeliveryBoost/Action";

export default function Delivery() {
  return (
    <div className=" min-h-screen bg-zinc-100 pt-5">
      <div className="flex px-1 py-0.5 ml-2 items-center">
        <h1 className="font-semibold text-xl pr-2"> Delivery Boost</h1>
        <Image src="/premium.svg" alt="premium" height={70} width={70} />
      </div>
      <div className="flex px-1 py-0.5 ml-2 items-center">
        <Image src="/faqs.svg" alt="faqs" height={20} width={20} />
        <a className="text-violet-500 px-1 font-medium text-xs" href="#">
          {" "}
          FAQs{" "}
        </a>
      </div>
      <div className="mt-3 mx-3 h-full">
        <DeliveryOverview />
      </div>
      <div className="px-4">
        <Action />
      </div>
    </div>
  );
}
