export default function Card2() {
  return (
    <>
      <div className="bg-white rounded-md w-full md:w-1/3 p-2 border-[#34d399] border-2 border-dashed ">
        <div className="flex justify-between p-3 w-full">
          <p className="text-xs text-slate-700"> Extra Revenue Earned</p>
          <p className="text-sm text-[#34d399] font-semibold"> ₹0 </p>
        </div>
        <div className="flex justify-between p-3 w-full">
          <p className="text-xs text-slate-700"> RTO Cost Saved</p>
          <p className="text-sm text-[#34d399] font-semibold"> ₹0 </p>
        </div>
        <div className="border-dashed border-2 border-gray-300"></div>

        <div className="flex justify-between p-3 w-full">
          <p className="text-sm text-slate-700 font-semibold">Value Added</p>
          <p className="text-sm text-[#34d399] font-semibold"> ₹0 </p>
        </div>
      </div>
    </>
  );
}
