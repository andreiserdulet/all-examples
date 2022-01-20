import Enzyme, {mount} from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'

import moxios from "moxios";
import {getSecretWord} from './index.js'
Enzyme.configure({adapter: new EnzymeAdapter()});


describe('getSecretword', ()=>{
    beforeEach(()=>{
        moxios.install()
    })
    afterEach(()=>{
        moxios.uninstall();
    })
    test('secretWord is returned', ()=>{
        moxios.wait(()=>{
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status:200,
                response:'party',

            })
        })
        //update to test app in Redux
        return getSecretWord()
        .then((secretWord)=>{
            expect(secretWord).toBe('party');
        })
    })
})