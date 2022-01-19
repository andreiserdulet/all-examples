import React from 'react'
import PropTypes from 'prop-types';
const InputJotto = ({success, secretWord}) =>{
    const [currentGuess, setCurrentGuess] = React.useState('');
    if(success){
        return <div data-test="component-input"></div>
    }
    return <div data-test="component-input">
        <form>
            <input data-test='input-box' 
                   className='input-jotto'
                   type="text"
                   placeholder="enter guess"
                   value={currentGuess}
                   onChange={(event)=> setCurrentGuess(event.target.value)}
            />
            <button 
            data-test="submit-button"
            className='button-submit-jotto'
            onClick={(event)=>{
                event.preventDefault();
                //TODO: update guessedWords
                // TODO: check against secretWord and update success if needed
                setCurrentGuess('');
            }}
            >Submit</button>
        </form>
    </div>
}
InputJotto.propTypes = {
    secretWord: PropTypes.string.isRequired
}
export default InputJotto