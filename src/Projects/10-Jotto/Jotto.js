import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Congrats from './components/congratulations/Congratulations.js';
import GuessedWords from './components/guess-words/GuessedWords.js';
import InputJotto from './components/input-component/InputJotto';
import { getSecretWord } from './redux/actions';

const Jotto = () =>{
  const success = useSelector((state) => state.success);
  const guessedWords = useSelector((state) => state.guessedWords);
  const secretWord = useSelector((state) => state.secretWord);

  // so that we can dispatch an action
  const dispatch = useDispatch();

  useEffect(() => {
    // get the secret word
    dispatch(getSecretWord());
  }, []);

  return (
    <div data-test="component-app" className="container">
      <h1>Jotto</h1>
      {/* <p>{secretWord}</p> */}
      <Congrats success={success} secretWord={secretWord}/>
      <InputJotto success={success} secretWord={secretWord} />
      <GuessedWords guessedWords={guessedWords} />
    </div>
  );
}
export default Jotto;