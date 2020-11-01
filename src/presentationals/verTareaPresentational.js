import React from 'react'

const verTareaPresentational = ({ tareas }) => (
  <ul>
    {tareas.map(tarea =>
      <li key={tarea.id}>
       {tarea.text}
      </li>
    )}
  </ul>
)

export default verTareaPresentational
