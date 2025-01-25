import { configureStore } from "@reduxjs/toolkit";
import autWhatsapp from './auth/reducer.js'




export const store = configureStore({
    reducer: {
        autWhatsapp: autWhatsapp
    }
})