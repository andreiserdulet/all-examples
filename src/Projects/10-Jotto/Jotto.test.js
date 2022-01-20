import Enzyme, {mount} from 'enzyme';
import {Provider} from 'react-redux';
import {findByAttr, storeFactory} from './test/testUtils'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'
import Jotto from './Jotto.js'
Enzyme.configure({adapter: new EnzymeAdapter()});

jest.mock('./redux/actions/');
import { getSecretWord as mockGetSecretWord } from './redux/actions';

const setup = ()=>{
    //mount for useEffect
    const store = storeFactory();
    return mount<(<Provider store={store}><Jotto/></Provider>)
}
test('renders without errors', ()=>{
    const wrapper = setup();
    const appComponent = findByAttr(wrapper, 'component-app');
    expect(appComponent).toHaveLength(1);
})

describe('get secret word', ()=>{
    beforeEach(()=>{
        mockGetSecretWord.mockClear();
    })
    test('get secret word on ap mount', ()=>{
        const wrapper = setup();
        expect(mockGetSecretWord).toHaveBeenCalledTimes(1);
    })
    test('getSecretWord does not run on app update',()=>{
        const wrapper = setup();
        mockGetSecretWord.mockClear();

        //triggers useEffect but sends error for now
        wrapper.setProps();

        expect(mockGetSecretWord).toHaveBeenCalledTimes(0);
    })
})