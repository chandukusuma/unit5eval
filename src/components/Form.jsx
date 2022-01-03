//import React from "react";
import { useState } from "react";
import {nanoid} from "nanoid";
import "./form.css"

export const Form = ({getData}) => {

    const [form, setFrom] = useState({

        Title: "",
        Ingredients : "",
        Time:"",
        Img: "",
        Instructions: ""

    })

    const [list, setList] = useState([]);

    const handleChange = (e) => {
        console.log(e.target.Title, e.target.value)
        const {Title, value} = e.target;

        setFrom({
            ...form,
            [Title] : value
        })
    }

    const handleSubmit = (data) => {
        data.preventDefault()
        const payload = {
            data : form,
            status: false,
            id : nanoid(7)
        }

        console.log(payload.id)
        setList([...list, payload])
        getData(form)

        console.log("list", list)
        console.log("form", form)
    }

    return (
        <>
        <form className="form" onSubmit = {handleSubmit}>
            <input onChange={handleChange} type = "text" name="Title"  placeholder='title' id="title" />
            <input onChange={handleChange} type = "text" name="Ingredients"  placeholder='Ingredients' id="ingr" />
            <input onChange={handleChange} type = "text" name="Time"  placeholder='time' id="time" />
            <input onChange={handleChange} type = "file" placeholder="select file"/>
            <input onChange={handleChange} type = "text" name="Instuctions"  placeholder='instructions' id="instr" />
            <button>Store data!</button>

        </form>

        </>
    )
}

