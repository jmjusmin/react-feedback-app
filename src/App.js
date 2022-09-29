import { useState } from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {v4 as uuidv4} from 'uuid'; 
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackData from "./data/FeedbackData";
import AboutPage from "./components/pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import {FeedbackProvider} from './context/FeedbackContext'

//JSX- allow to return html element | need only one parent element to return
function App(){
    //app level state
    const [feedback, setFeedback] = useState(FeedbackData);

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

    return (
        <FeedbackProvider>
        <Router>
            <Header />
            {/* we can either use <div> of <>(fragment) to wrap the element */}
            <div className='container'>
                <Routes>
                    <Route exact path="/" element={
                        <>
                            <FeedbackForm handleAdd ={addFeedback}/>
                            <FeedbackStats feedback={feedback}/>
                            <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
                            <AboutIconLink/>
                        </>
                    }>
                    </Route>

                    <Route path="/about" element={<AboutPage/>}/>
                    
                </Routes>
            </div> 
        </Router>
        </FeedbackProvider>
    )
}

export default App;