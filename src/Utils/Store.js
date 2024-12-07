import {configureStore} from "@reduxjs/toolkit"
import sessionReducer from "./SessionSlice"

const Store = configureStore({
    reducer : {
        Session : sessionReducer
    }
})



export default Store