import { connect } from 'react-redux'
import verTareaPresentational from '../presentationals/verTareaPresentational'

const mapStateToProps = state => ({
  tareas: state.tareas
})


export default connect(
  mapStateToProps
)(verTareaPresentational)
