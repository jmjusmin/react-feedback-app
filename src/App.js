import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";

//JSX- allow to return html element | need only one parent element to return
function App(){
    //app level state
    const [feedback, setFeedback] = useState(FeedbackData);
    
    return (
        <>
            <Header />
            {/* we can either use <div> of <>(fragment) to wrap the element */}
            <div className='container'>
                <FeedbackList feedback={feedback}/>
            </div> 
        </>
    )
}

export default App;