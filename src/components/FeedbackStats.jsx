import {useContext} from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
  //get feedback from FeedbackContext
  const {feedback} = useContext(FeedbackContext);
  //cal avg
  let avg = feedback.reduce((acc,current)=>{
    return acc+current.rating
  }, 0) / feedback.length;

  avg = avg.toFixed(1).replace(/[.,]0$/,'');

  return (
    <div className="feedback-stats">
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {isNaN(avg) ? 0 : avg}</h4>
    </div>
  )
}

export default FeedbackStats