import './App.css';
import { useState } from 'react'
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData'

function App() {

  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (item) => {
    setFeedback({feedback.filter(
      
    )})
  }

  return (
    <div className="App">
      <FeedbackList onclick={handleClick} feedback={feedback}/>
    </div>
  );
}

export default App;
