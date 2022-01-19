import Enzyme, {shallow} from 'enzyme';
import {findByAttr, checkProps} from '../../test/testUtils.js'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'
import InputJotto from './InputJotto.js'
import React from 'react';
Enzyme.configure({adapter: new EnzymeAdapter()});
// const mockSetCurrentGuess = jest.fn();
// jest.mock('react', ()=>(
//     {
//         ...jest.requireActual('react'),
//     useState:(initialState)=> [initialState, mockSetCurrentGuess]
//     }
// ))
const setup =(success=false, secretWord='party') =>{
    return shallow(<InputJotto success={success} secretword={secretWord}/>)
}
describe('render', ()=>{
    describe('success is true', ()=>{
        let wrapper;
        beforeEach(()=>{
            wrapper=setup(true);
        })
        test('renders without error', ()=>{
            const inputComponent = findByAttr(wrapper, 'component-input');
            expect(inputComponent.length).toBe(1);
        })
        test('input box does not show', ()=>{
            const inputBox = findByAttr(wrapper, 'input-box');
            expect(inputBox.exists()).toBe(false);
        })
        test('submit button does not show', ()=>{
            const submitButton = findByAttr(wrapper, 'submit-button');
            expect(submitButton.exists()).toBe(false);
        })
    })
    describe('success is false', ()=>{
        let wrapper;
        beforeEach(()=>{
            wrapper=setup(false);
        })
        test('renders without error', ()=>{
            const inputComponent = findByAttr(wrapper, 'component-input');
            expect(inputComponent.length).toBe(1);
        })
        test('input box does show', ()=>{
            const inputBox = findByAttr(wrapper, 'input-box');
            expect(inputBox.exists()).toBe(true);
        })
        test('submit button does show', ()=>{
            const submitButton = findByAttr(wrapper, 'submit-button');
            expect(submitButton.exists()).toBe(true);
        })
    })
})

    test('does not throw warnig with expected props', ()=>{
        checkProps(InputJotto, {secretWord: 'party'})
    })
describe('state controlled input field', ()=>{
    let mockSetCurrentGuess = jest.fn();
    let wrapper;
    let originalUseState;
    beforeEach(()=>{
        mockSetCurrentGuess.mockClear();
        originalUseState = React.useState;
        React.useState = jest.fn(()=>['', mockSetCurrentGuess]);
        wrapper = setup();
    })
    afterEach(()=>{
        React.useState = originalUseState;
    })
    test('state updates with value of input box up change', ()=>{
        const inputBox = findByAttr(wrapper, 'input-box');
        const mockEvent = {target: {value: 'train'}};
        inputBox.simulate('change', mockEvent);
        expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
    })
    test('field is cleared upon submit button click', ()=>{
        const submitButton = findByAttr(wrapper, 'submit-button');
        submitButton.simulate('click', {preventDefault(){}});
        expect(mockSetCurrentGuess).toHaveBeenCalledWith("");

    })
})