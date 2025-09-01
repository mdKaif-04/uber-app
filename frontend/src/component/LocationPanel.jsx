import React from 'react'
const LocationPanel = () => {
    const locations = [
        "43,Near abc park , jaipur ,rajasthan",
        "61,Near efd colony , udaipor ,rajasthan",
        "98,Near Ricco park , alwar ,rajasthan",
    ]
 
  return (
    <div >
        {
            locations.map((e, index) => (
        <div key={index} className='flex items-center justify-start gap-3 border-2 active:border-[#727676] border-gray-100  bg-[#eee] p-3 my-2 rounded-xl   outline-none '>
            <h2 className='bg-[#c4c0c07c] h-10 rounded-full w-10 text-xl text-gray-800 flex items-center justify-center'><i className="ri-map-pin-fill"></i></h2>
            <h4 className='font-medium'>{e}</h4>
        </div>
            ))
        }
        
    </div>
  )
}
export default LocationPanel