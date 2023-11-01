import React from 'react'

export default function Cards({ notas }) {
    console.log(notas)
    const handleClick = () => {
        console.log("nota a eliminar")
    }
    return (
       <>
        {notas.map((content) => (
            <div className='container-notas'>
                <p className='notas'>{content}</p>
                <button className='notas-button' onClick={handleClick}>X</button>
            </div>
        ))}
       </>
    )
}
