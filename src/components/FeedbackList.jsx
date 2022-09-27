import React from 'react';
import PropTypes from 'prop-types';
import FeedbackItem from './FeedbackItem';

function FeedbackList({feedback}) {
    if(!feedback || feedback.lenght === 0){
        return <p>No feed back yet.</p>
    }
  return (
    <div className='feedback-list'>
        {feedback.map((item)=>(
            <FeedbackItem key={item.id} item={item}/>
        ))}
    </div>
  )
}

FeedbackList.prototype = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  )
}

export default FeedbackList