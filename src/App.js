//JSX- allow to return html element | need only one parent element to return
function App(){
    const title = 'Blog Post';
    const body = 'This is my blog post';
    const comments = [
        {id:1, text:'Comment one'},
        {id:2, text:'Comment two'},
        {id:3, text:'Comment three'},
    ];

    const loading = false;
    const showComments = true;

    if(loading) return <h1>Loading...</h1>

    const commentBlock = (
    <div className="comment">
        <h3>Comment({comments.length})</h3>
        <ul>
            {comments.map((comment,index)=>(
                //can also use comment.id also
                <li key={index}>{comment.text}</li>
            ))}
        </ul>
    </div>);

    return (
        //we can either use <div> of <>(fragment) to wrap the element
        <div className='container'>
            <h1>{title}</h1>
            <p>{body}</p>

            {showComments && commentBlock}
            
        </div>
    )
}

export default App;