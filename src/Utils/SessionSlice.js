import { createSlice } from "@reduxjs/toolkit";

const SessionSlice = createSlice({
    name : "Session",
    initialState : [],
    reducers : {
        addSession : (state, action) => {
            state.push(action.payload)
        }
    }
})


export default SessionSlice.reducer
export const{addSession} = SessionSlice.actions