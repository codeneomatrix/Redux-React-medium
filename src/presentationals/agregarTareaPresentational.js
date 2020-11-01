import React from 'react'

const agregarTareaPresentational = ({ fusion_agregarTarea }) => {

  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        fusion_agregarTarea(input.value)
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <button type="submit">
          Agregar tarea
        </button>
      </form>
    </div>
  )
}

export default agregarTareaPresentational