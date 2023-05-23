import PropTypes from 'prop-types'
import FeedbackItem from './FeedbackItem'
import { useContext } from 'react'
import FeedbackContext from './context/FeedbackContext'



function FeedbackList() {
    const {feedback} = useContext(FeedbackContext)
    
    return (
       <div className='feedback-list'>
        {feedback.map((item) => (
            <FeedbackItem 
                key={item.id} 
                item={item}
            />
        ))}
       </div>
    )

}

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        })
    ),
}

export default FeedbackList