import { createReducer } from "@reduxjs/toolkit";
import actions from "./actions";


const { getDescripcion, getOpciones } = actions


const initialState = {
    descripcion: [],
    opciones: []
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
)

export default reducer
