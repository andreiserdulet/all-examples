import { actionTypes } from "../actions";
import wordsData from "../../wordsData";
const testWords = wordsData.filter(item=>item.length === 5).filter(item=>{
  const checkUniqueArray = (item) =>{
    let check = true;
    for(let i = 0; i < item.length-1; i++){
      for(let j = i + 1; j < item.length; j++){
        if(item[i] === item[j]){
          check = false;
          return check
        }
      }
      
    }
    return check;
  }
  const checkItem = checkUniqueArray(item);
  if(checkItem){
    console.log(item);
    return item;
  }
 
});


const words = testWords[Math.floor(Math.random()*testWords.length)];
export default (state=words, action) => {
    switch(action.type) {
      case actionTypes.SET_SECRET_WORD:
        return action.payload
      default:
        return state;
    }
  }