import React from 'react';
import Enzyme,{mount, shallow} from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'
import JottoPage from './JottoPage';
import {findByAttr} from './test/testUtils';
Enzyme.configure({adapter: new EnzymeAdapter()});

const setup = (state={}) =>{
    //TODO: apply state
   const wrapper = mount(<JottoPage/>);

   //add value to the input box
    const inputBox = findByAttr(wrapper, 'input-box');
    inputBox.simulate('change', {target:{value:'train'}})
   //simulate click on submit
   const submitButton = findByAttr(wrapper, 'submit-button');
   submitButton.simulate('click', {preventDefault(){}});
   return wrapper;
}
describe('invalid words guessed', ()=>{
    test.todo('guessedwords table does not get another row');
})
describe('no words guessed', ()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = setup({secretWord:'party', success:false, guessedWords:[]})
    });
    test('creates GuessedWord table with one row', ()=>{
        const guessedWordRows = findByAttr(wrapper, 'guessed-word');
        expect(guessedWordRows).toHaveLength(1);
    })
})
describe.skip('some words guessed', ()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = setup({
            secretWord:'party',
            sucess:'false',
            guessedWords:[
                {
                    guessedWord: 'agile',
                    letterMatchCount:1
                }
            ]
        })
    })
    test('adds row to guessWords table', ()=>{
        const guessedWordNodes = findByAttr(wrapper, 'guessed-word');
        expect(guessedWordNodes).toHaveLength(1);
    })
});
describe.skip('guess secret word', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup({
          secretWord: 'party',
          success: false,
          guessedWords: [{ guessedWord: 'agile', letterMatchCount: 1 }],
        });
  
      // add value to input box
      const inputBox = findByAttr(wrapper, 'input-box');
      const mockEvent = { target: { value: 'party' } };
      inputBox.simulate('change', mockEvent);
  
        // simulate click on submit button
        const submitButton = findByAttr(wrapper, 'submit-button');
        submitButton.simulate('click', { preventDefault() {} });
    });
    test('adds row to guessedWords table', () => {
        const guessedWordNodes = findByAttr(wrapper, 'guessed-word');
        expect(guessedWordNodes).toHaveLength(1);
    });
    test('displays congrats component', () => {
        const congrats = findByAttr(wrapper, 'component-congrats');
        expect(congrats.text().length).toBeGreaterThan(0);
    });
    test('does not display input component contents', () => {
      const inputBox = findByAttr(wrapper, "input-box");
      expect(inputBox.exists()).toBe(false);
  
      const submitButton = findByAttr(wrapper, "submit-button");
      expect(submitButton.exists()).toBe(false);
    });
  });