import React, { useState } from 'react'
import Cards from './Cards.jsx'

export default function Form() {
    const [inputValue, setInputValue] = useState("")

    const [list, setList] = useState([])


    const handleChange = (e) => {
        setInputValue(e.target.value)

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputValue.nota)
        setList([
            ...list,
            inputValue
        ])
        e.target.reset()
        setInputValue('')
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Entrenar, estudiar, leer...'
                    name='nota'
                    onChange={handleChange}
                />
                <button type='submit'>Enviar</button>
            </form>
            <Cards notas={list}/>
        </>
    )
}
