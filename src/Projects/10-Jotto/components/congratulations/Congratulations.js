import React from 'react';
import PropTypes from 'prop-types'
const Congratulations =  (props)=>{
    if(props.success){
        return (<div data-test="component-congrats">
            <span data-test="congrats-message">
                Congratulations! You found the word!
            </span>
        </div>);
    }
    else{
        return (<div data-test="component-congrats"></div>);
    }
}
Congratulations.propTypes = {
    success: PropTypes.bool.isRequired,
}
export default Congratulations;