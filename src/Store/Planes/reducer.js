import { createReducer } from "@reduxjs/toolkit";
import actions from "./actions";


const { getDescripcion, getFechas } = actions


const initialState = {
    descripcion: [],
    fechas: []
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
        .addCase(
            getFechas.fulfilled,
            (state,action) => {
                let newState = {
                    ...state,
                    fechas: action.payload.fechas
                }
                return newState
            }
        )
)

export default reducer
