import { actionTypes } from "../actions";
import wordsData from "../../wordsData";
const testWords = wordsData.filter(item=>item.length === 5);
const findUniqueWord = (testWords) =>{
return testWords;
}

const words = findUniqueWord(testWords[Math.floor(Math.random()*testWords.length)]);
export default (state=words, action) => {
    switch(action.type) {
      case actionTypes.SET_SECRET_WORD:
        return action.payload
      default:
        return state;
    }
  }