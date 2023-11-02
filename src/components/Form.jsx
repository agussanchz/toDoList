import React, { useState } from 'react'
import Cards from './Cards.jsx'

export default function Form() {
    // Estados
    const [inputValue, setInputValue] = useState("")
    const [list, setList] = useState([])

    // Creacion de id random
    const id = Math.random()

    // Obtener valor del input
    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    // Enviar lista con el valor del input y un id random
    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(inputValue === "" || inputValue === null || inputValue === undefined){
            return alert("El campo es incorrecto, porfavor vuelva a escribirlo. Gracias", e.target.reset())
        }

        setList([
            ...list,
            {
                nota: inputValue,
                id: id
            }
        ])
        e.target.reset()
        setInputValue('')
    }

    // Eliminar nota de la lista
    const removeFromList = (id) => {
        const newList = list.filter((nota) => nota.id !== id)
        setList(newList)
    }

    // Elimitar todas las notas
    const removeAll = () => {
        setList([])
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Entrenar, estudiar, leer...'
                    name='nota'
                    required={true}
                    onChange={handleChange}
                />
                <button type='submit'>Agregar nota</button>
            </form>
            <Cards notas={list} removeFromList={removeFromList} removeAll={removeAll}/>
        </>
    )
}
