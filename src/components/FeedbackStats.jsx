import {useContext} from 'react'
import PropTypes from 'prop-types'
import FeedbackContext from './context/FeedbackContext'


function FeedbackStats() {

  const {feedback} = useContext(FeedbackContext)

  let average = feedback.reduce((accum, current) => {
    return accum + current.rating
  }, 0) / feedback.length

  average = average.toFixed(1).replace(/[.,]0$/, '')

  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

FeedbackStats.propTypes = {
    average: PropTypes.number.isRequired
}

FeedbackStats.defaultProps = {
    average: 5
}

export default FeedbackStats