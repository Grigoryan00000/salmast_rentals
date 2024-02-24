import car1 from "../../assets/home/home-cars/home-cars-items/car1.png"
import car2 from "../../assets/home/home-cars/home-cars-items/car2.png"
import car3 from "../../assets/home/home-cars/home-cars-items/car3.png"
import car4 from "../../assets/home/home-cars/home-cars-items/car4.png"

import speed from "../../assets/home/home-cars/home-cars-items/options/speedometer-01.png"
import gearbox from "../../assets/home/home-cars/home-cars-items/options/manual-gearbox.png"
import users from "../../assets/home/home-cars/home-cars-items/options/users-01.png"
import gas from "../../assets/home/home-cars/home-cars-items/options/gas-station.png"

import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    homeCars: [
        {
            id:1,
            img: car1,
            title: "BMW X2, 2021",
            
        },
        {
            id:2,
            img: car1,
            title: "Ծրագրավորման",
        },
        {
            id:3,
            img: car1,
            title: "Մուլտիմեդիայի",
        },
        {
            id:4,
            img: car2,
            title: "Kia Optima, 2020",
        },
        {
            id: 5,
            img: car3,
            title: "Nissan Rogue, 2018",
        },
        {
            id:4,
            img: car4,
            title: "Toyota Camry, 2021",
        },
        
    ],
    homeCarsOptions: [
        {
            id:1,
            img: speed,
            text: "300 կմ/ժ",
        },
        {
            id: 2,
            img: gearbox,
            text: "Auto",
        },
        {
            id: 3,
            img: users,
            text: "4 անձ",
        },
        {
            id: 4,
            img: gas,
            text: "Բենզին"
        }
    ],


}
const HomeCarsSlice = createSlice({
    name: "homeCars",
    initialState,
    
})

export default HomeCarsSlice.reducer;