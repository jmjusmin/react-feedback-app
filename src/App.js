import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./components/pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import {FeedbackProvider} from './context/FeedbackContext'

//JSX- allow to return html element | need only one parent element to return
function App(){
    //app level state
    return (
        <FeedbackProvider>
        <Router>
            <Header />
            {/* we can either use <div> of <>(fragment) to wrap the element */}
            <div className='container'>
                <Routes>
                    <Route exact path="/" element={
                        <>
                            <FeedbackForm/>
                            <FeedbackStats/>
                            <FeedbackList/>
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