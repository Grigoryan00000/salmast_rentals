import { configureStore } from "@reduxjs/toolkit";
import homeCarsReducer from "../slices/HomecCarsSlices"
import langReducer from "../slices/LangSlice"


export const store = configureStore({
    reducer: {
        homeCars: homeCarsReducer,
        lang: langReducer
    }
})