import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lang: "hy"
}

const usersSlice = createSlice({
    name: "users", 
    initialState,
    reducers: {
        selectRu:(state, {payload}) => {
            state.lang = "ru"
        },
        selectEn:(state, {payload}) => {
            state.lang = "en"
        },
        selectHy:(state, {payload}) => {
            state.lang = "hy"
        },

    }
})

export default usersSlice.reducer;
export const {selectEn, selectRu, selectHy} = usersSlice.actions;

