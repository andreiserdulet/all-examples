import React from 'react'
import Congratulations from './components/congratulations/Congratulations.js';
import GuessedWords from './components/guess-words/GuessedWords.js';
const JottoPage = () =>{
    return <div>
        <h1>Jotto</h1>
        <Congratulations success={false}/>
        <GuessedWords guessedWords={[{guessedWord:'train', letterMachCount:3}, 
        {guessedWord:'party', letterMachCount:5}]}/>
    </div>
}
export default JottoPage;