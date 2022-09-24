import Header from "./components/Header";

//JSX- allow to return html element | need only one parent element to return
function App(){
    return (
        <>
            <Header />
            {/* we can either use <div> of <>(fragment) to wrap the element */}
            <div className='container'>
                <h1>My App</h1>
            </div> 
        </>
    )
}

export default App;