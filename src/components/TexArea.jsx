import { Textarea } from '@mui/joy'
import React from 'react'



export default function TexArea({value,onChange,defaultValue}) {

    return (
        <div className="max-h-[20rem] w-[80%] overflow-y-auto border rounded-md ">
            <Textarea
                variant="soft"
                placeholder="Escribe Una Opcion"
                sx={{backgroundColor:'#405674', border:'1px solid white', color:'white'}}
                onChange={onChange}
                value={value}
                defaultValue={defaultValue}
            />
        </div>
    )
}
