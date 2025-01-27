import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { urlHost } from "../../../url";



const getDescripcion = createAsyncThunk(
    'getDescripcion',
    async() => {
        try {
            let res = await axios.get(`${urlHost}plan/descripcion`)
            // console.log(res)
            return { descripcion: res.data.descripcion}
        } catch (error) {
            return { descripcion: []}
        }
    }
)

const actions = { getDescripcion }

export default actions