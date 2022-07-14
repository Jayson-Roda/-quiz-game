function Home(props){
    return (
        <div className="home">
            <h1 className="home--title">Quizzical</h1>
            <p className="home--paragraph">Test your knowledge on our quiz</p>
            <button onClick={props.startQuiz}className="start-btn">Start Quiz</button>
        </div>
    )
}

export default Home