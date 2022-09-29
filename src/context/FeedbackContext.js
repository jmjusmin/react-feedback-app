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
    const[feedbackEdit, setFeedbackEdit] = useState({
        item:{},
        edit:false
    })

    //add feedback
    const addFeedback = (newFeedback) =>{
        newFeedback.id = uuidv4();
        //take new feedback to exsiting array
        setFeedback([newFeedback,...feedback]);
    }

    //delete feedback
    const deleteFeedback = (id) =>{
        if(window.confirm('Confirm deletion?')){
            //filter the seleted id out of feedback array
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    //update feedback item
    const updateFeedback = (id, updItem) =>{
        setFeedback(feedback.map((item)=>item.id === id ? {...item,...updItem}:item))
    }

    //set item to updated
    const editFeedback = (item) =>{
        setFeedbackEdit({
            item,
            edit:true
        }) 
    }

    return <FeedbackContext.Provider value={{
        feedback: feedback,
        feedbackEdit:feedbackEdit,
        addFeedback:addFeedback,
        deleteFeedback: deleteFeedback,
        editFeedback:editFeedback,
        updateFeedback:updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;