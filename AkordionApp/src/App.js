import React,{useState} from 'react';
import data from './data';
import SingleQuestion from './Question';


function App() {
  const[questions,setQuestions]=useState(data);

  return (
    <main>
    <div className='container'>
      <h3 style={{textAlign: 'center'}}>
        <br/>
        <br/>
        <br/>
        <br/>       
        Questions and answers about login</h3>
      <section className='info'>
        {questions.map((question)=>{
        return (
          <SingleQuestion key={question}{...question}></SingleQuestion>
        );
})}
      </section>
     
    </div>
    </main>
  );
}

export default App;