import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter  from '@wojtekmaj/enzyme-adapter-react-17';
import Congratulations from './Congratulations'
import {findByAttr} from '../../test/testUtils.js'
Enzyme.configure({adapter: new EnzymeAdapter()});

const setup = (props={}) =>{
    return shallow(<Congratulations {...props}/>)
}

test('renders without error', ()=>{
 const wrapper = setup();
 const component = findByAttr(wrapper, 'component-congrats');
 expect(component.length).toBe(1);
})

test('renders no text when success prop is false', ()=>{
   const wrapper = setup({success: false});
   const component = findByAttr(wrapper, 'component-congrats');
   expect(component.text()).toBe('');
})
test('renders non-empty congrats message when success prop is true', ()=>{
    const wrapper = setup({success: true});
    const message = findByAttr(wrapper, 'congrats-message');
    expect(message.text().length).not.toBe(0);
})