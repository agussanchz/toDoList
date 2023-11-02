import React from 'react'

export default function Cards({ notas, removeFromList, removeAll }) {
    return (
       <>
        {notas.map((content) => (
            <div className='container-notas' key={content.id}>
                <p className='notas'>{content.nota}</p>
                <button className='notas-button' onClick={() => removeFromList(content.id)}>X</button>
            </div>
        ))}
        {notas != '' ? <button className='reset-button' onClick={() => removeAll()}>Resetear todo</button> : ""}
       </>
    )
}
