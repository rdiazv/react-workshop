/**
 * 🚨 ATENCIÓN: Está es la solución a un problema, no la veas a menos que
 * hayas podido resolverlo por ti mism@.
 *
 * Si necesitas orientación no tengas miedo de preguntar, o si lo prefieres
 * puedes trabajar en conjunto con un compañero para que se apoyen mutuamente,
 * pero si miras y copias la solución a los problemas no le sacarás mucho
 * provecho al workshop, así que no lo hagas 😉
 */








































import React from 'react'
import PropTypes from 'prop-types'
import formatTime from '../helpers/formatTime'

export default class TimeEntry extends React.Component {
  static propTypes = {
    project: PropTypes.string,
    time: PropTypes.number,
  }

  static defaultProps = {
    project: 'Sin proyecto',
    time: 0,
  }

  state = {
    isTimerActive: false,
    time: this.props.time,
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.time !== prevState.time) {
      return {
        time: nextProps.time,
      }
    }

    return null
  }

  componentWillUnmount() {
    this.stopTimerInterval()
  }

  handleToggleTimerClick = () => {
    this.setState(
      state => ({
        isTimerActive: !state.isTimerActive,
      }),
      () => {
        this.stopTimerInterval()

        if (this.state.isTimerActive) {
          this.startTimerInterval()
        }
      }
    )
  }

  startTimerInterval() {
    this.interval = setInterval(() => {
      this.setState(state => ({
        time: state.time + 1,
      }))
    }, 1000)
  }

  stopTimerInterval() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div className="TimeEntry">
        <div className="TimeEntry__project">{this.props.project}</div>

        <div className="TimeEntry__timer">
          <div className="TimeEntry__timer__time">
            {formatTime(this.state.time)}
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
