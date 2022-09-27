import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackData from "./data/FeedbackData";


//JSX- allow to return html element | need only one parent element to return
function App(){
    //app level state
    const [feedback, setFeedback] = useState(FeedbackData);
    const deleteFeedback = (id) =>{
        if(window.confirm('Confirm deletion?')){
            //filter the seleted id out of feedback array
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    return (
        <>
            <Header />
            {/* we can either use <div> of <>(fragment) to wrap the element */}
            <div className='container'>
                <FeedbackStats feedback={feedback}/>
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
            </div> 
        </>
    )
}

export default App;