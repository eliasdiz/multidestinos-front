import { configureStore } from "@reduxjs/toolkit";
import autWhatsapp from './auth/reducer.js'
import planes from './Planes/reducer.js'




export const store = configureStore({
        reducer: {
                autWhatsapp: autWhatsapp,
        planes: planes
}
})