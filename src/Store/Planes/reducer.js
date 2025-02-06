import { createReducer } from "@reduxjs/toolkit";
import actions from "./actions";


const { getDescripcion, getOpciones, getAyuda } = actions


const initialState = {
    descripcion: [],
    opciones: [],
    ayuda: []
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
            getOpciones.fulfilled,
            (state,action) => {
                let newState = {
                    ...state,
                    opciones: action.payload.opciones
                }
                return newState
            }
        )
        .addCase(
            getAyuda.fulfilled,
            (state,action) => {
                let newState = {
                    ...state,
                    ayuda: action.payload.ayuda
                }
                return newState
            }
        )
)

export default reducer
