import { configureStore } from "@reduxjs/toolkit";
import homeCarsReducer from "../slices/HomecCarsSlices"
import langReducer from "../slices/LangSlice"
import popupReducer from "../slices/PopupSlice"


export const store = configureStore({
    reducer: {
        homeCars: homeCarsReducer,
        lang: langReducer,
        popup: popupReducer
    }
})