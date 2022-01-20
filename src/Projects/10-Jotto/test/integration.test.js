import React from 'react';
import Enzyme,{mount, shallow} from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'
import {storeFactory} from '../test/testUtils'
import {guessedWord, guessWord} from '../redux/actions'
Enzyme.configure({adapter: new EnzymeAdapter()});

describe('guessWord action dispatcher', ()=>{
    const secretWord = 'party';
    const unsuccessfulGuess = 'train';
    describe('no guessed words', ()=>{
        let store;
        const initialState = {secretWord};
        beforeEach(()=>{
            store = storeFactory(initialState);
        })
        test('updates state correctly for unsuccessful guess', ()=>{
           store.dispatch(guessWord(unsuccessfulGuess));
           const newState = store.getState();
           const expectedState = {
               ...initialState,
               success:false,
               guessWords:[{
                   guessedWord: unsuccessfulGuess,
                   letterMatchCount:3
               }]
           }
           
           expect(newState).toEqual(expectedState);
        })
        test('updates state correctly for successful guess', ()=>{
            store.dispatch(guessWord(secretWord));
            const newState = store.getState();
            const expectedState = {
                secretWord,
                success:true,
                guessWords:[{
                    guessedWord: secretWord,
                    letterMatchCount:5
                }]
            }
            
            expect(newState).toEqual(expectedState);
        })
        
    })
    describe('some guessed words', ()=>{
        const guessedWords = [{guessWord: 'agile', letterMatchCount:1}]
        const initialState = {
            guessedWord, secretWord
        }
        let store;
        beforeEach(()=>{
            store = storeFactory(initialState);
        })
        test('updates state correctly for unsuccessful guess', ()=>{
            store.dispatch(guessWord(unsuccessfulGuess));
            const newState = store.getState();
            const expectedState = {
                secretWord, 
                success:false,
                guessedWords:[
                    ...guessedWords, 
                    {guessedWord:unsuccessfulGuess, letterMatchCount:3}
                ]
            }
            expect(newState).toEqual(expectedState);
        })
        test('updates state correctly for successful guess', ()=>{
            store.dispatch(guessWord(secretWord));
            const newState = store.getState();
            const expectedState = {
                secretWord, 
                success:true,
                guessedWords:[
                    ...guessedWords, 
                    {guessedWord:secretWord, letterMatchCount:5}
                ]
            }
            expect(newState).toEqual(expectedState);
        })
        
    })
})