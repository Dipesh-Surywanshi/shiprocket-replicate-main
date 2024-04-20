export default function Calender(){
    return(
        <>
        
<div className="relative mx-auto md:mx-0 md:ml-5 mt-4 md:w-11/12 lg:w-4/12 w-11/12">
  <div className="absolute inset-y-0 end-2 flex items-center ps-3.5 pointer-events-none">
    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
    </svg>
  </div>
  <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl block w-full ps-10 p-1.5" placeholder="Mar 16, 2021 - Apr 14, 2024"/>
</div>

</>
    )
}