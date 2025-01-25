import { createReducer } from "@reduxjs/toolkit";
import actions from "./action";


const { autSesion } = actions


const initialState = {
    status: null
}

const reducer = createReducer(
    initialState,
    (builder) => builder
        .addCase(
            autSesion.fulfilled,
            (state,action) => {
                let newState = {
                    ...state,
                    status: action.payload.status
                }
                return newState
            }
        )

)

export default reducer