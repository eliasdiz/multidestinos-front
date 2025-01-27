import { createReducer } from "@reduxjs/toolkit";
import actions from "./actions";


const { getDescripcion } = actions


const initialState = {
    descripcion: []
} 

const reducer = createReducer(
    initialState,
    (builder) => builder
        .addCase(
            getDescripcion.fulfilled,
            (state,action) => {
                let newState = {
                    ...state,
                    descripcion: action.payload.descripcion
                }
                return newState
            }
        )
)

export default reducer
