import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    windows: [
        {
            id: 1,
            active: false
        },
        {
            id: 2,
            active: false
        },
        {
            id: 3,
            active: false
        },
        {
            id: 4,
            active: false
        }
    ]
}


const popupSlice = createSlice({
    name: "popup", 
    initialState,
    reducers: {
        activate:(state, {payload}) => {
            state.windows.forEach(({id, active}) => {
                if(id === payload){
                    state.windows[id-1].active = true
                } else {
                    state.windows[id-1].active = false
                }
            })
            
        },
        closePopup: (state, payload) => {
            state.windows.forEach(({id, active}) => {
                state.windows[id-1].active = false
            })
        }

    }
})



export default popupSlice.reducer;
export const {activate, closePopup} = popupSlice.actions;

