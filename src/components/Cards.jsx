import React from 'react'

export default function Cards({ notas, removeFromList }) {
    return (
       <>
        {notas.map((content) => (
            <div className='container-notas' key={content.id}>
                <p className='notas'>{content.nota}</p>
                <button className='notas-button' onClick={() => removeFromList(content.id)}>X</button>
            </div>
        ))}
       </>
    )
}
