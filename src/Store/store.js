import { configureStore } from "@reduxjs/toolkit";
import autWhatsapp from './auth/reducer.js'
import descripcion from './Descripcion/reducer.js'




export const store = configureStore({
    reducer: {
        autWhatsapp: autWhatsapp,
        descripcion: descripcion
    }
})