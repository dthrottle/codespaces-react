import './App.css';
import {v4 as uuidv4} from 'uuid'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import FeedbackForm from './components/FeedbackForm'
import FeedbackStats from './components/FeedbackStats'
import Header from './components/Header';
import AboutIconLink from './components/AboutIconLink';
import AboutPage from './pages/AboutPage';

function App() {

  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => 
        item.id !== id))
      }
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback,...feedback])
  }

  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route 
            exact 
            path='/'
            element= {
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList handleDelete={deleteFeedback} feedback={feedback}/>
              </>
            }>
          </Route>

          <Route path='/about' element={<AboutPage />} />
          
        </Routes>
        <AboutIconLink />
      </div>
    </Router>
  );
}

export default App;
