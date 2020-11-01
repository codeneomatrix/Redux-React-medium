import { connect } from 'react-redux'
import { agregarTarea } from '../actions'
import agregarTareaPresentational from '../presentationals/agregarTareaPresentational'

const mapDispatchToProps = dispatch => ({
  fusion_agregarTarea: text => dispatch(agregarTarea(text))
})

export default connect(
  null
  ,mapDispatchToProps
)(agregarTareaPresentational)
