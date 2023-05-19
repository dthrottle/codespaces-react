import PropTypes from 'prop-types'
import FeedbackItem from './FeedbackItem'



function FeedbackList({feedback, handleDelete}) {
    return (
       <div className='feedback-list'>
        {feedback.map((item) => (
            <FeedbackItem 
                key={item.id} 
                item={item}
                handleDelete={handleDelete}
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