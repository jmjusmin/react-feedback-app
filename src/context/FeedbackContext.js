import { createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid'; 

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [feedback,setFeedback] = useState([
        {
            id: 1,
            text: 'This item is item 1',
            rating: 10
        },
        {
            id: 2,
            text: 'This item is item 2',
            rating: 4
        },
        {
            id: 3,
            text: 'This item is item 3',
            rating: 5
        }
    ])

    const addFeedback = (newFeedback) =>{
        newFeedback.id = uuidv4();
        //take new feedback to exsiting array
        setFeedback([newFeedback,...feedback]);
    }

    const deleteFeedback = (id) =>{
        if(window.confirm('Confirm deletion?')){
            //filter the seleted id out of feedback array
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    return <FeedbackContext.Provider value={{
        feedback: feedback,
        addFeedback:addFeedback,
        deleteFeedback: deleteFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;