let nextTodoId = 0
export const agregarTarea = tarea => ({
      type: "AGREGAR_TAREA"
    , id: nextTodoId++
    , text: tarea
})

