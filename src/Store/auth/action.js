import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { urlHost } from "../../../url";


const autSesion = createAsyncThunk(
    'autSesion',
    async () => {
        try {
            let res = await axios.get(`${urlHost}whatsapp/auth`)
            return { status: res.data.status}
        } catch (error) {
            return { status: null}
        }
    }
)

const actions = { autSesion }

export default actions