import {createContext, useState, useEffect} from 'react'
// import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([])
    const [feedbackEdit, setFeedbackEdit] = useState({
      item: {},
      edit: false
    })

    useEffect(() => {
      fetchFeedback()
    }, [])

    const fetchFeedback = async () => {
      const response = await fetch('http://localhost:5000/feedback?_sort=id&order=desc')
      const data = await response.json()
      setFeedback(data)
      setIsLoading(false)
    }

    const deleteFeedback = async (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
          await fetch(`http://localhost:5000/feedback/${id}`, {method: 'DELETE'})
          fetchFeedback()
        }
      }
    
    const addFeedback = async (newFeedback) => {
      const response = await fetch('http://localhost:5000/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newFeedback)
      })
      const data = await response.json()
      setFeedback([data,...feedback])
    }

    const editFeedback = (item) => {
      setFeedbackEdit({
        item,
        edit: true
      })
    }

    const updateFeedback = async (id, updItem) => {
      const response = await fetch(`http://localhost:5000/feedback/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updItem)
      })

      const data = await response.json()

      setFeedback(feedback.map((item) => 
        (item.id === id ? data  : item))
    )}

    return <FeedbackContext.Provider 
            value={{
                feedback,
                isLoading,
                deleteFeedback,
                addFeedback,
                editFeedback,
                feedbackEdit,
                updateFeedback
            }}>
            {children}
        </FeedbackContext.Provider>
}

export default FeedbackContext