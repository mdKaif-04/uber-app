const axios = require('axios');

module.exports.getAddressCoordinate = async (address) => {
	const apiKey = process.env.GOOGLE_MAPS_API;
	if (!apiKey) throw new Error('Google Maps API key not set in environment variables');
    if(!address) throw new Error("no address provided");
    
	const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;
	try {
        const response = await axios.get(url);
        if(response.data.status === 'OK'){
             const location = response.data.results[ 0 ].geometry.location;
            return {
                ltd : location.lat,
                lng : location.lng,
            };
        }else{

            throw new Error('Unable to fetch coordinates');
        }
		
	
	} catch (error) {
        console.log(error)
		throw new Error('Failed to fetch coordinates: ' + error.message);
	}
};

module.exports.getDistanceTime = async(origin,destination)=>{
    if(!origin || !destination){
        throw new Error ('Orgin and destination are required')
    }
    const apiKey = process.env.GOOGLE_MAPS_API;
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;
    try {
        const response = await axios.get(url)
        console.log('result',response.data)
        if(response.data.status === 'OK'){
            if(response.data.rows[0].elements[0].status === 'ZERO_RESULTS'){
                throw new Error("No routes found");
            }
            return response.data.rows[0].elements[0];
        } else {
            throw new Error('Unable to fetch distance and time');
        }
        
    } catch (error) {
        console.log(error)
        throw new Error(error.message);
    }
}

