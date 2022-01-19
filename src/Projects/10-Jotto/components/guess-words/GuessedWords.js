import React from 'react'
import PropTypes from 'prop-types'
import './GuessedWords.scss'
const GuessedWords = (props) =>{
    let contents;
    if(props.guessedWords.length === 0){
        contents = (
            <span data-test='guess-instructions'>Try guess the secret word!</span>
        )
    }
    else{
        const guessedWordsRow = props.guessedWords.map((word,index)=>{
            return <tr data-test="guessed-word" key={index}>
                <td>{word.guessedWord}</td>
                <td>{word.letterMachCount}</td>
            </tr>
        })
        contents = (
            <div data-test='guessed-words' className='guessed-words-container'>
                <h3>Guessed Words</h3>
                <table className='guessed-words-table'>
                    <thead>
                        <tr>
                            <th>Guess</th>
                            <th>Matchng Letters</th>
                        </tr>
                    </thead>
                    <tbody>
                        {guessedWordsRow}
                    </tbody>
                </table>
            </div>
        )
    }
    return (<div data-test="component-guessed-words">
        {contents}
        </div>)
}

GuessedWords.propTypes = {
 guessedWords: PropTypes.arrayOf(
     PropTypes.shape({
         guessedWord: PropTypes.string.isRequired,
         letterMachCount:PropTypes.number.isRequired,
     })
 ).isRequired,
};

export default GuessedWords;