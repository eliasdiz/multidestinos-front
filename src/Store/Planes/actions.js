import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { urlHost } from "../../../url";


const getDescripcion = createAsyncThunk(
    'getDescripcion',
    async() => {
        try {
            let res = await axios.get(`${urlHost}/descripcion`)
            // console.log(res)
            return { descripcion: res.data.descripcion}
        } catch (error) {
            return { descripcion: []}
        }
    }
)

const getOpciones = createAsyncThunk(
    'getOpciones',
    async() => {
        try {
            let res = await axios.get(`${urlHost}/opcion`)
            return { opciones: res.data.opciones}
        } catch (error) {
            return { opciones: []}
        }
    }
)

const getAyuda = createAsyncThunk(
    'getAyuda',
    async() => {
        try {
            let res = await axios.get(`${urlHost}/ayuda`)
            return { ayuda: res.data.ayuda}
        } catch (error) {
            return { ayuda: []}
        }
    }
)

const actions = { getDescripcion, getOpciones, getAyuda}

export default actions