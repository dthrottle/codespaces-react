import './App.css';
import { useState } from 'react'
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData'

function App() {

  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => 
        item.id !== id))
      }
  }

  return (
    <div className="App">
      <FeedbackList handleDelete={deleteFeedback} feedback={feedback}/>
    </div>
  );
}

export default App;
