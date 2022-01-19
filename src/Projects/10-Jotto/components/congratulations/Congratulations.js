import React from 'react';
import PropTypes from 'prop-types'
import './Congratulations.scss'
const Congratulations =  (props)=>{
    if(props.success){
        return (<div data-test="component-congrats" className='congrats-container'>
            <span data-test="congrats-message" className="congrats-text">
                Congratulations! You found the word!
            </span>
        </div>);
    }
    else{
        return (<div data-test="component-congrats" className='congrats-container'></div>);
    }
}
Congratulations.propTypes = {
    success: PropTypes.bool.isRequired,
}
export default Congratulations;