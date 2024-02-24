import car1 from "../../assets/home/home-cars/home-cars-items/car1.png"
import car2 from "../../assets/home/home-cars/home-cars-items/car2.png"
import car3 from "../../assets/home/home-cars/home-cars-items/car3.png"
import car4 from "../../assets/home/home-cars/home-cars-items/car4.png"

import speed from "../../assets/home/home-cars/home-cars-items/options/speedometer-01.png"
import gearbox from "../../assets/home/home-cars/home-cars-items/options/manual-gearbox.png"
import users from "../../assets/home/home-cars/home-cars-items/options/users-01.png"
import gas from "../../assets/home/home-cars/home-cars-items/options/gas-station.png"

import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

try{
    const res = await axios.get(`http://jsonplaceholder.typicode.com/users`)
    dispatch( {
        type: GET_USERS,
        payload: res.data
    })
}
catch(e){
    dispatch( {
        type: USERS_ERROR,
        payload: console.log(e),
    })
}
console.log(x);

const initialState = {
    header:[

    ],
}
const HomeCarsSlice = createSlice({
    name: "homeCars",
    initialState,
    
})

export default HomeCarsSlice.reducer;