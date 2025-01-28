import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { urlHost } from "../../../url";


const getDescripcion = createAsyncThunk(
    'getDescripcion',
    async() => {
        try {
            let res = await axios.get(`${urlHost}plan/descripcion`)
            return { descripcion: res.data.descripcion}
        } catch (error) {
            return { descripcion: []}
        }
    }
)

const getFechas = createAsyncThunk(
    'getFechas',
    async() => {
        try {
            let res = await axios.get(`${urlHost}plan/fecha`)
            return { fechas: res.data.fechas}
        } catch (error) {
            return { fechas: []}
        }
    }
)

const actions = { getDescripcion, getFechas}

export default actions