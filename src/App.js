
import './App.css';
import {useState} from 'react';
import Home from './components/Home';
import QuestionsList from './components/QuestionsList';


function App() {
  const [start, setStart] = useState(false)

  const startQuiz = () => {
    setStart(prevStart => !prevStart)
  }
  
  return (
    <div>
      {
        start ?
        <>
          <QuestionsList 
            startQuiz={startQuiz}
          />
        </>
        :
        <Home 
          startQuiz={startQuiz}
        />
      }
    </div>
  );
}

export default App;
