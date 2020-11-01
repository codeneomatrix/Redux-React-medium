
const tareas = (state = [], action) => {
    switch (action.type) {
    case 'AGREGAR_TAREA':
      return [
        ...state,
        {
          id: action.id,
          text: action.text
        }
      ]

    default:
      return state
  }

}


function rootReducer(state = {}, action) {
  return {
    tareas: tareas(state.tareas, action)
  };
}

export default rootReducer