/**
 * Ejercicio 4 - Lifecycle
 *
 * 🏆 Objetivos:
 *   1. Almacenar el valor de la propiedad "time" en el state, para
 *      poder mutar su valor.
 *   2. Al iniciar el timer el tiempo debe incrementar segundo a segundo.
 *   3. Al detener el timer el tiempo debe dejar de incrementar.
 *   4. Usa `formatTime` para mostrar el tiempo transcurrido.
 *   5. Si el componente recibe un nuevo valor para la propiedad "time"
 *      debe reemplazar al tiempo transcurrido actual.
 *   6. Si el componente debe detener el timer antes de desmontarse para
 *      evitar fugas de memoria.
 */

import React from 'react'
import PropTypes from 'prop-types'
import formatTime from '../helpers/formatTime'

export default class TimeEntry extends React.Component {
  static propTypes = {
    time: PropTypes.number,
  }

  static defaultProps = {
    time: 0,
  }

  state = {
    isTimerActive: false,

    /**
     * ✏️ Usa la propiedad `time` como el valor inicial para el
     * tiempo transcurrido.
     */
  }

  /**
   * ✏️ Actualiza el state cuando recibas un nuevo valor para la
   * propiedad `time`.
   *
   * 🦄 https://reactjs.org/docs/react-component.html#the-component-lifecycle
   */

  /**
   * ✏️ Asegúrate de detener el timer antes de desmontar el componente.
   */

  handleToggleTimerClick = () => {
    /**
     * ✏️ Después de mutar el state debes verificar lo siguiente:
     *   - Si el timer ahora está activo, segundo a segundo debes
     *     incrementar en 1 el valor del tiempo transcurrido.
     *   - Si el timer ahora está detenido el tiempo transcurrido
     *     debe dejar de incrementar.
     *
     * 🦄 Esto te ayudará con el incremento segundo a segundo:
     * https://www.w3schools.com/jsref/met_win_setinterval.asp
     *
     * Y recuerda que `setState` soporta las siguientes firmas:
     *   `setState(newState, callback?)`
     *   `setState(currentState => newState, callback?)`
     */
    this.setState(state => ({
      isTimerActive: !state.isTimerActive,
    }))
  }

  render() {
    return (
      <div className="TimeEntry">
        <div className="TimeEntry__project">React Workshop</div>

        <div className="TimeEntry__timer">
          <div className="TimeEntry__timer__time">
            {/* ✏️ Despliega el tiempo transcurrido */}
            {formatTime(this.props.time)}
          </div>

          <button
            className="TimeEntry__timer__control"
            onClick={this.handleToggleTimerClick}
            type="button"
          >
            {this.state.isTimerActive ? (
              <i className="icon ion-md-pause" />
            ) : (
              <i className="icon ion-md-play" />
            )}
          </button>
        </div>
      </div>
    )
  }
}
