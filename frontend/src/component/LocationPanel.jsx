import React from 'react'
const LocationPanel = ({setPanelOpen,setVehiclePanelOpen}) => {
    const locations = [
        "43,Near abc park , jaipur ,rajasthan",
        "61,Near efd colony , udaipor ,rajasthan",
        "98,Near Ricco park , alwar ,rajasthan",
        "23,Near xyz park , jodhpur ,rajasthan",
        "12,Near pqr park , bikaner ,rajasthan",
        "56,Near lmn park , kota ,rajasthan",
        "98,Near Ricco park , agra ,UP",
        "61,Near als colony , tonk ,rajasthan",
    ]
 
  return (
    <div className='h-full overflow-y-scroll px-2  '>
        {
            locations.map(function(e,idx){
       return <div key={idx} onClick={()=>{setVehiclePanelOpen(true),setPanelOpen(false) }}
        className='flex items-center justify-start gap-3 border-2 active:border-[#727676] border-gray-100  bg-[#eee] p-3 my-2 rounded-xl   outline-none '>
            <h2 className='bg-[#c4c0c07c] h-10 rounded-full w-10 text-xl text-gray-800 flex items-center justify-center'><i className="ri-map-pin-fill"></i></h2>
            <h4 className='font-medium'>{e}</h4>
        </div>
            })
        }
        
    </div>
  )
}

export default LocationPanel