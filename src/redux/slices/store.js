import { configureStore } from "@reduxjs/toolkit";
import homeCarsReducer from "../slices/HomecCarsSlices"


export const store = configureStore({
    reducer: {
        homeCars: homeCarsReducer,
    }
})